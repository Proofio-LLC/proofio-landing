import { MailerooClient } from 'maileroo'

const maileroo = MailerooClient.getClient(process.env.MAILEROO_SEND_KEY || '')

interface EmailNotificationParams {
  email: string
  recipientName?: string
  subject: string
  content: {
    title: string
    message: string
    metadata?: Record<string, any>
    ctaText?: string
    ctaLink?: string
  }
}

/**
 * Sends email notification for the landing page (e.g. support tickets)
 */
export async function sendEmailNotification(params: EmailNotificationParams): Promise<boolean> {
  try {
    const { email, recipientName = 'User', subject, content } = params

    // Build email HTML
    const emailHtml = buildEmailHtml(content)

    // Send email via Maileroo
    try {
      const success = await maileroo
        .setFrom('Proofio Support', 'noreply@mail.proofio.app')
        .setTo(recipientName, email)
        .setSubject(subject)
        .setHtml(emailHtml)
        .sendBasicEmail()

      if (!success) {
        console.error('Maileroo sending failed')
        return false
      }

      console.log(`Support confirmation email sent successfully to ${email}`)
      return true
    } catch (error) {
      console.error('Maileroo error:', error)
      return false
    }
  } catch (error) {
    console.error('Error sending email notification:', error)
    return false
  }
}

/**
 * Builds HTML email template (Matches the style of proofio-de)
 */
function buildEmailHtml(content: EmailNotificationParams['content']): string {
  const { title, message, metadata, ctaText, ctaLink } = content

  const headerGradient = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' // Blue
  const iconEmoji = '🎫'

  const dashboardUrl = 'https://dash.proofio.app'
  const finalCtaLink = ctaLink || `${dashboardUrl}/dashboard`
  const finalCtaText = ctaText || 'View Website'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1f2937;
      background-color: #f3f4f6;
      padding: 40px 20px;
      -webkit-font-smoothing: antialiased;
    }
    .email-wrapper { max-width: 600px; margin: 0 auto; }
    .container {
      background-color: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .header {
      background: ${headerGradient};
      padding: 60px 40px;
      text-align: center;
      color: #ffffff;
    }
    .header-icon { font-size: 48px; margin-bottom: 20px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em; }
    .content-wrapper { padding: 40px; }
    .message { font-size: 18px; color: #4b5563; margin-bottom: 32px; line-height: 1.8; }
    
    .card {
      background-color: #f9fafb;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      border: 1px solid #e5e7eb;
    }
    .card-title { font-weight: 700; color: #111827; margin-bottom: 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
    
    .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #6b7280; font-size: 14px; font-weight: 500; }
    .detail-value { color: #111827; font-size: 14px; font-weight: 700; }

    .button-container { text-align: center; margin-top: 10px; }
    .button {
      display: inline-block;
      padding: 18px 36px;
      background: #10b981;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 16px;
      font-weight: 700;
      font-size: 16px;
      box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
      transition: transform 0.2s;
    }

    .footer { padding: 40px; text-align: center; color: #6b7280; font-size: 14px; }
    .footer a { color: #10b981; text-decoration: none; font-weight: 600; }
    
    @media (max-width: 600px) {
      .header { padding: 40px 20px; }
      .content-wrapper { padding: 30px 20px; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="container">
      <div class="header">
        <div class="header-icon">${iconEmoji}</div>
        <h1>${title}</h1>
      </div>
      
      <div class="content-wrapper">
        <div class="message">
          ${message.replace(/\n/g, '<br>')}
        </div>

        ${metadata && Object.keys(metadata).length > 0 ? `
          <div class="card">
            <div class="card-title">Ticket Details</div>
            ${Object.entries(metadata).map(([key, value]) => `
              <div class="detail-row">
                <span class="detail-label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: </span>
                <span class="detail-value">${typeof value === 'object' ? JSON.stringify(value) : value}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="button-container">
          <a href="${finalCtaLink}" class="button">${finalCtaText}</a>
        </div>
      </div>

      <div class="footer">
        <p>© ${new Date().getFullYear()} Proofio. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim()
}

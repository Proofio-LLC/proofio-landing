import { Locale } from './i18n';

export async function getMessages(locale: Locale) {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    // Fallback to English if locale file doesn't exist
    const messages = await import(`../messages/en.json`);
    return messages.default;
  }
}

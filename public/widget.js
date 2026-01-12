(function() {
  'use strict';
  
  // Widget translations
  const translations = {
    de: {
      verifiedFrom: (count) => `Verifiziert aus ${count} Plattformen`,
      reviews: (count) => `${count.toLocaleString('de-DE')} verifizierte Reviews`,
      aiChecked: "Proofio-AI-geprüft",
      outOf5: "von 5 Sternen",
      madeWith: "Made with",
      tryForFree: "Try now for free"
    },
    en: {
      verifiedFrom: (count) => `Verified from ${count} platforms`,
      reviews: (count) => `${count.toLocaleString('en-US')} verified reviews`,
      aiChecked: "Proofio AI Checked",
      outOf5: "out of 5",
      madeWith: "Made with",
      tryForFree: "Try now for free"
    }
  };

  const themeColors = {
    light: {
      bg: '#ffffff',
      border: '#e5e7eb',
      text: '#111827',
      textSecondary: '#6b7280',
      divider: '#f3f4f6',
      badgeBg: '#f0fdf4',
      badgeText: '#166534',
      brandingText: '#9ca3af',
      brandingLogo: 'https://proofio.app/logo.svg',
      starInactive: '#f3f4f6'
    },
    dark: {
      bg: '#111827',
      border: '#374151',
      text: '#f9fafb',
      textSecondary: '#9ca3af',
      divider: '#1f2937',
      badgeBg: '#064e3b',
      badgeText: '#ecfdf5',
      brandingText: '#6b7280',
      brandingLogo: 'https://proofio.app/whitelogo.svg',
      starInactive: '#1f2937'
    }
  };

  function renderWidget(data, container) {
    const { stats, settings } = data;
    const lang = settings.language || 'en';
    const theme = settings.theme || 'light';
    const tw = translations[lang];
    const colors = themeColors[theme];
    const filterGreen = "brightness(0) saturate(100%) invert(53%) sepia(93%) saturate(1415%) hue-rotate(126deg) brightness(96%) contrast(101%)";
    
    // Fix: Use oo.png for the shield icon, not brandingLogo

    const widgetHTML = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: ${colors.bg}; border: 1px solid ${colors.border}; border-radius: 12px; padding: 16px; display: inline-flex; flex-direction: column; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
          <div style="background: ${theme === 'light' ? '#fff' : '#1f2937'}; border: 1px solid ${colors.divider}; border-radius: 6px; padding: 2px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <img src="https://proofio.app/oo.png" alt="Proofio" style="width: 16px; height: 16px; object-fit: contain; filter: ${filterGreen};" />
          </div>
          <span style="font-weight: 700; font-size: 14px; color: ${colors.text};">${tw.verifiedFrom(stats.platforms)}</span>
          <span style="color: ${colors.brandingText}; font-size: 14px;">·</span>
          <span style="font-weight: 700; font-size: 14px; color: ${colors.text};">${stats.averageRating.toFixed(1)} ★</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12px; font-weight: 500; color: ${colors.textSecondary};">${tw.reviews(stats.totalReviews)}</span>
          ${settings.showAiBadge ? `
          <div style="display: flex; align-items: center; gap: 4px; background: ${colors.badgeBg}; color: ${colors.badgeText}; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            ${tw.aiChecked}
          </div>` : ''}
        </div>
        ${settings.showBranding ? `
        <div style="margin-top: 4px; border-top: 1px solid ${colors.divider}; padding-top: 8px; display: flex; align-items: center; gap: 4px; font-size: 10px; color: ${colors.brandingText};">
          <span>${tw.madeWith}</span>
          <img src="${colors.brandingLogo}" alt="Proofio" style="height: 10px; width: auto;" />
          <span>-</span>
          <a href="https://proofio.app" target="_blank" style="color: #01bb7e; text-decoration: none; font-weight: 600;">${tw.tryForFree}</a>
        </div>` : ''}
      </div>
    `;

    container.innerHTML = widgetHTML;
  }

  function init() {
    // Find all elements with data-proofio-widget attribute
    const containers = document.querySelectorAll('[data-proofio-widget]');
    
    containers.forEach(container => {
      const apiKey = container.getAttribute('data-api-key');
      if (!apiKey) {
        console.error('Proofio Widget: data-api-key attribute is required');
        return;
      }

      // Fetch widget data
      fetch('https://api.proofio.app/api/v1/public/widget', {
        headers: {
          'x-api-key': apiKey
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        renderWidget(data, container);
      })
      .catch(error => {
        console.error('Proofio Widget error:', error);
        container.innerHTML = '<div style="padding: 8px; color: #ef4444; font-size: 12px;">Failed to load widget</div>';
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// src/matomo.js
import MatomoTracker from '@datapunt/matomo-tracker-js';

const matomo = new MatomoTracker({
    urlBase: 'https://analytics.summidence.com.au/matomo/', // ✅ Use full and public Matomo URL with trailing slash
    siteId: 1, // 🔁 Replace if you’re tracking a different site in Matomo

    // Optional: Track time spent on page
    heartBeat: {
        active: true,
        seconds: 10
    },

    // Optional: Enable automatic link tracking
    linkTracking: true,

    // Optional: Initial configuration
    configurations: {
        setDocumentTitle: document.title,
    }
});

export default matomo;

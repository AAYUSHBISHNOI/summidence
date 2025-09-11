// src/matomo.js
import MatomoTracker from '@datapunt/matomo-tracker-js';

const matomo = new MatomoTracker({
  urlBase: 'https://analytics.summidence.com.au/matomo/',  // ⚠️ Include trailing slash, and use full URL
  siteId: 1,

  heartBeat: {
    active: true,
    seconds: 10
  },

  linkTracking: true,

  configurations: {
    setDocumentTitle: document.title
  }
});

export default matomo;

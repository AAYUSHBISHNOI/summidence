import MatomoTracker from '@datapunt/matomo-tracker-js';

const matomo = new MatomoTracker({
    urlBase: 'https://analytics.summidence.com.au/matomo/',  // trailing slash ✅ correct
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

// src/matomo.js
import MatomoTracker from '@datapunt/matomo-tracker-js';

const matomo = new MatomoTracker({
    urlBase: 'https://www.summidence.com.au/matomo/',
    siteId: 1,


    heartBeat: {
        active: true,
        seconds: 10
    },


    linkTracking: true,


    configurations: {
        setDocumentTitle: document.title,
    }
});

export default matomo;

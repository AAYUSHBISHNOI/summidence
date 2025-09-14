// src/analytics/MatomoTagManager.js
import { useEffect } from 'react';

function MatomoTagManager() {
  useEffect(() => {
    window._mtm = window._mtm || [];
    window._mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'http://34.143.245.132:8080/js/container_F5d0X0Lf.js';
    document.head.appendChild(script);
  }, []);

  return null;
}

export default MatomoTagManager;

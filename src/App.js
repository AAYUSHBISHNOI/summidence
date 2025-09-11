import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Summidence from "./Components/pages/Summidence";
import School from "./Components/pages/School";
import Aboutus from "./Components/pages/Aboutus";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import Business from "./Components/pages/Business";
import Kids from "./Components/pages/Kids";
import OurContactUs from "./Components/pages/CommonContactUs";
import UpcomingPrograms from "./Components/common/UpcomingPrograms";

import matomo from "./matomo";

// Custom hook for Matomo page tracking
function useMatomoPageTracking() {
  const location = useLocation();

  useEffect(() => {
    matomo.trackPageView({
      documentTitle: document.title,
    });
  }, [location]);
}


function App() {
  // Call Matomo tracking hook
  useMatomoPageTracking();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Summidence />} />
        <Route path="/school" element={<School />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/our-contact-us" element={<OurContactUs />} />
        <Route path="/upcoming-programs" element={<UpcomingPrograms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

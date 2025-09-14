import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Summidence from "./Components/pages/Summidence";
import School from "./Components/pages/School";
import Aboutus from "./Components/pages/Aboutus";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import Business from "./Components/pages/Business";
import Kids from "./Components/pages/Kids";
import OurContactUs from "./Components/pages/CommonContactUs";
import UpcomingPrograms from "./Components/common/UpcomingPrograms";

// Analytics
import MatomoTagManager from "./analytics/MatomoTagManager";
import useMatomoPageTracking from "./analytics/useMatomoPageTracking"; // ⬅️ import hook

function App() {
  useMatomoPageTracking(); // ⬅️ Call the hook to track route changes

  return (
    <>
      <MatomoTagManager />
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

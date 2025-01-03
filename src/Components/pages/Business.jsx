import React from "react";
import Home from "../Business/Home";
import HowItWorks from "../Business/HowItWorks";
import AboutUsBusiness from "../Business/AboutUsBusiness";
import OurProcess from "../Business/OurProcess";
import Testimonials from "../Summidence/Testimonials";
import OurGaleery from "../Business/OurGaleery";

const Business = () => {
  return (
    <div>
      <Home />
      {/* <BusinessCase /> */}
      <HowItWorks />
      <AboutUsBusiness />
      <OurProcess />
      <Testimonials />
      <OurGaleery />
      {/* <ContactBusiness /> */}
    </div>
  );
};

export default Business;

import React from "react";
import Home from "../Business/Home";
import HowItWorks from "../Business/HowItWorks";
import AboutUsBusiness from "../Business/AboutUsBusiness";
import Contactus from "./../Summidence/Contantus";
import ContactBusiness from "../Business/ContactBusiness";
import OurProcess from "../Business/OurProcess";
import BusinessCase from "../Business/BusinessCase";
import Testimonials from "../Summidence/Testimonials";
import OurGaleery from "../Business/OurGaleery";

const Business = () => {
  return (
    <div>
      <Home />
      <BusinessCase />
      <OurGaleery />
      <HowItWorks />
      <AboutUsBusiness />
      <OurProcess />
      <Testimonials />
      {/* <ContactBusiness /> */}
    </div>
  );
};

export default Business;

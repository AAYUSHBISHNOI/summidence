import React from "react";
import Home from "../Business/Home";
import HowItWorks from "../Business/HowItWorks";
import AboutUsBusiness from "../Business/AboutUsBusiness";
import Contactus from "./../Summidence/Contantus";
import ContactBusiness from "../Business/ContactBusiness";
import OurProcess from "../Business/OurProcess";
import BusinessCase from "../Business/BusinessCase";

const Business = () => {
  return (
    <div>
      <Home />
      <BusinessCase />
      <HowItWorks />
      <AboutUsBusiness />
      <OurProcess />
      <ContactBusiness />
    </div>
  );
};

export default Business;

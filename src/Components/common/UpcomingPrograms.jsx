import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import upcomingprograms from "../../assets/img/webp/UpcomingPrograms.png";
import man_img from "../../assets/img/webp/Contact-us.jpeg";
import { Link } from "react-router-dom";
import GetInTouch from "../CommonContactUs/GetInTouch";

const UpcomingPrograms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    program: "", // New field for Programs dropdown
    message: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and form submission logic here...
  };

  return (
    <div>
      <Container>
        <div className=" d-flex justify-content-center mt-5 pt-5">
          <img
            className="img_upcoming w-100 h-100"
            src={upcomingprograms}
            alt=""
          />
        </div>
        <div className=" my-3 lg:my-5 d-flex justify-content-center text-center">
          <p className=" ff_Jakarta fs_20 lh_132 fw-normal text-black">
            "Coming soon", please
            <Link
              to="/our-contact-us"
              className=" ff_Poppins fw-normal fs_26 text-decoration-none common_clr_blue mx-2"
            >
              Contact Us
            </Link>
            for further information .
          </p>
        </div>

        <div className="space_getin_touch" id="contact_us">
          <Container>
            <GetInTouch />
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default UpcomingPrograms;

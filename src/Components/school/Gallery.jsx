import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_one from "../../assets/img/School/Png/1.jpeg";
import img_three from "../../assets/img/School/Png/3.jpeg";
import img_four from "../../assets/img/School/Png/pre-school.png";
import img_six from "../../assets/img/School/Png/6.jpeg";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state

  return (
    <div>
      <Container className="p-lg-0 space_gallery">
        <div className="text-center">
          <h2 className=" ff_Poppins fs_56 fw-bold lh_125 common_clr_blue mb-0">
            Gallery
          </h2>
          <div className="space_img_gallery pb-md-3">
            <Row className="d-flex justify-content-center align-items-center">
              <Col
                md={6}
                lg={3}
                className="d-flex justify-content-center align-items-center"
              >
                <img className="w-100 h-100 img_gallery" src={img_one} alt="" />
              </Col>
              <Col
                md={6}
                lg={3}
                className="d-flex justify-content-center align-items-center mt-4 mt-md-0"
              >
                <img className="w-100 h-100 img_gallery" src={img_six} alt="" />
              </Col>
              <Col
                md={6}
                lg={3}
                className="d-flex justify-content-center align-items-center mt-4 mt-lg-0"
              >
                <img
                  className="w-100 h-100 img_gallery"
                  src={img_three}
                  alt=""
                />
              </Col>
              {/* <Col
                md={6}
                lg={3}
                className="d-flex justify-content-center align-items-center mt-4 mt-lg-0"
              >
                <img
                  className="w-100 h-100 img_gallery"
                  src={img_four}
                  alt=""
                />
              </Col> */}
            </Row>
            {/* <div className=" d-flex justify-content-center align-items-center mt-5">
              <Link
                to="/our-contact-us"
                className="common_bttn text-white ff_Poppins fw-normal fs_16 text-decoration-none"
              >
                Contact Us
              </Link>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;

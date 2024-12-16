import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img_one from "../../assets/img/webp/Anti-dumping.jpg";
import img_two from "../../assets/img/webp/Tract-Logo.jpg";
import img_three from "../../assets/img/webp/Mainfreight_Logo.png";
import img_four from "../../assets/img/webp/4.png";
import img_five from "../../assets/img/webp/5.png";
import img_six from "../../assets/img/webp/6.png";
import img_seven from "../../assets/img/webp/7.png";
import img_eight from "../../assets/img/webp/8.png";
import img_nine from "../../assets/img/webp/9.png";
import img_ten from "../../assets/img/webp/10.png";

const Current = () => {
  return (
    <div className="bg_current space_current">
      <Container>
        <div className="text-center text-md-start">
          <h2 className="ff_Poppins fw-semibold fs_48 lh_118 text-white">
            Our <span className="txt_clr_orange">Clients</span>
          </h2>
        </div>
        <Row className=" d-flex align-items-center justify-content-center text-center align-items-md-start justify-content-md-start text-md-start">
          <Col md={4}>
            <img className="marquee-img" src={img_one} alt="image1" />
          </Col>
          <Col md={4}>
            <img className="marquee-img" src={img_two} alt="image2" />
          </Col>
          <Col md={4}>
            <img className="marquee-img" src={img_three} alt="image3" />
          </Col>
        </Row>
      </Container>
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className="marquee-container mt-5"
      >
        {/* <img className="marquee-img" src={img_four} alt="image4" />
        <img className="marquee-img" src={img_five} alt="image5" />
        <img className="marquee-img" src={img_six} alt="image6" />
        <img className="marquee-img" src={img_seven} alt="image7" />
        <img className="marquee-img" src={img_eight} alt="image8" />
        <img className="marquee-img" src={img_nine} alt="image9" />
        <img className="marquee-img" src={img_ten} alt="image10" /> */}
      </Marquee>
    </div>
  );
};

export default Current;

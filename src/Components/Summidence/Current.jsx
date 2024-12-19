import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img_one from "../../assets/img/webp/Anti-dumping.jpg";
import img_two from "../../assets/img/webp/Tract-Logo.jpg";
import img_three from "../../assets/img/webp/Mainfreight_Logo.png";

const Current = () => {
  return (
    <div className="bg_current space_current">
      <Container>
        <div className="text-center text-md-start">
          <h2 className="ff_Poppins fw-semibold fs_48 lh_118 text-white">
            Our <span className="txt_clr_orange">Clients</span>
          </h2>
        </div>
        <Marquee
          pauseOnHover={true}
          speed={90}
          gradient={false}
          className="marquee-container mt-5"
        >
          <img className="marquee-img" src={img_one} alt="image1" />
          <img className="marquee-img" src={img_two} alt="image2" />
          <img className="marquee-img" src={img_three} alt="image3" />
        </Marquee>
      </Container>
    </div>
  );
};

export default Current;

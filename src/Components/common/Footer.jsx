import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import footer_img from "../../assets/img/webp/footer-logo.png";
import Instagram from "../../assets/img/svg/Instagram.svg";
import Facebook from "../../assets/img/svg/Facebook.svg";
import Linkedin from "../../assets/img/svg/Linkedin.svg";
import TitterX from "../../assets/img/svg/TwitterX.svg";
import Youtube from "../../assets/img/svg/Youtube.svg";
import Business from "./../pages/Business";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };
  return (
    <div className="footer">
      <div className="footer_container mx-auto px-4">
        <Row className="space_row d-flex justify-content-between">
          <Col lg={5}>
            <a href="/">
              <img
                className="footer_img w-100"
                src={footer_img}
                alt="footer-img"
              />
            </a>
            <div>
              <p className="fs_16 ff_Poppins lh_125 txt_clr_dark_blue">
                We acknowledge the Traditional Owners of the land where we work
                and live, the Wurundjeri Woi-wurrung and Bunurong/Boon Wurrung
                peoples of the Kulin Nation and pay our respects to Elders past
                and present. We celebrate the stories, culture, and traditions
                of Aboriginal and Torres Strait Islander Elders of all
                communities who also work and live on this land. We acknowledge
                and honour the unbroken spiritual, cultural, and political
                connection they have maintained to this unique place for more
                than 2000 generations.
              </p>
            </div>
            <div className="gap-3 d-flex mt-sm-4 mt-2 pt-1 justify-content-start align-items-start">
              <a
                href="https://www.instagram.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.youtube.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Youtube} alt="youtube" />
              </a>
              <a
                href="https://x.com/?lang=en"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={TitterX} alt="TwiterX" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg_orange py-3">
        <div className="footer_container mx-auto px-3 my-1">
          <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-1">
            <p className="ff_Poppins fw-medium  lh_151 text-white mb-0">
              © {currentYear} Summidence. All rights reserved
            </p>
            <ul className="d-flex align-items-center gap-md-5 gap-4 mb-0">
              <li className=" ff_Poppins fw-medium  lh_151 text-white mb-0">
                Terms of service
              </li>
              <li className=" ff_Poppins fw-medium  lh_151 text-white mb-0">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

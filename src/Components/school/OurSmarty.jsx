import React from "react";
import pre_school from "../../assets/img/School/Png/pre-school.png";
import Kindergarten from "../../assets/img/School/Png/grade-7-8.png";
import pre_k from "../../assets/img/School/Png/Hero-img.png";
import { Col, Container, Row } from "react-bootstrap";
const preschoolData = [
  {
    image: pre_school,
    alt: "pre school",
    text: "Primary School (Grades 3-6)",
    para: "Fun, interactive speaking games, storytelling workshops, basic presentation skills, confidence-building exercises, and poetry and dramatic reading.",
  },
  {
    image: Kindergarten,
    alt: "pre school",
    text: "Middle School (Grades 7-8)",
    para: "Structured speech preparation, debate fundamentals, voice modulation techniques, body language awareness, and group presentation skills.",
  },
  {
    image: pre_k,
    alt: "pre school",
    text: "High School (Grades 9-12)",
    para: "Advanced presentation techniques, competitive debate training, leadership communication, interview preparation, and college admission speech coaching.",
  },
];
const OurSmarty = () => {
  return (
    <div className="pt-5 pb-5 mb-lg-5 mb-md-3 mb-sm-2">
      <Container>
        <div className="text-center">
          <h3 className="ff_Poppins fw-bold fs_48 lh_151 common_clr_blue mb-1">
            The Summidence Advantage for Schools
          </h3>
          <p className=" ff_Poppins fw-normal fs_16 lh_122 common_clr_black">
            Our carefully crafted curriculum offers age-appropriate programs
            that adapt to different grade levels.
          </p>
        </div>
      </Container>
      <div className="custom-container container text-center text-md-start">
        <Row className="mt-lg-5 justify-content-center">
          {preschoolData.map((item) => (
            <Col
              lg={4}
              sm={6}
              className="mt-md-4 mt-3 mt-lg-0 d-flex justify-content-center flex-column align-items-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="our_smarty_img w-100 h-100 mb-lg-4 mb-md-3 mb-sm-2 mb-1 rounded-5"
              />
              <p className="text-center ff_Poppins fw-semibold fs_24 lh_151 common_clr_blue pt-1 mb-0">
                {item.text}
              </p>
              <p className="text-center ff_Poppins fw-medium fs_16 lh_151 common_clr_black pt-1 mb-0 mx-3">
                {item.para}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurSmarty;

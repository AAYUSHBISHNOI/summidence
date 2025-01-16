import React from "react";
import about_our_school from "../../assets/img/School/Png/about.png";
import { Col, Container, Row } from "react-bootstrap";
const AboutOurSchool = () => {
  return (
    <div className="py-lg-5 py-0 my-lg-5 my-md-3 my-sm-2">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={5}>
            <img
              src={about_our_school}
              alt="about our school"
              className="about_our_school_img w-100 h-100"
            />
          </Col>
          <Col lg={7} className=" mt-3 mt-lg-0">
            <h2 className="ff_Poppins fw-bold text_unlock lh_151 common_clr_blue mb-3">
              Unlocking Student Potential: Transformative Programs for Lasting
              Success
            </h2>
            <p className="ff_Poppins fw-normal fs_16 lh_151 text-black pt-md-3 mb-xl-3 mb-0">
              At Summidence, our partnership with schools fosters remarkable
              growth in students' academic and personal development. Students
              gain the confidence to actively participate in class, improve
              their social skills, and excel in academic performance. Teachers
              see tangible improvements in student engagement, while parents
              notice stronger communication skills at home. Our programs are
              designed to prepare students for college interviews, academic
              presentations, leadership opportunities, and future careers,
              equipping them with essential skills for success.
            </p>
            <p className="ff_Poppins fw-normal fs_16 lh_151 text-black pt-3 mb-xl-3 mb-0">
              We offer flexible implementation options, including weekly
              speaking labs, after-school programs, specialized workshops,
              annual speaking festivals, and inter-school competitions.
              Together, we can create an environment where students thrive,
              building the confidence and skills essential for their futures.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutOurSchool;

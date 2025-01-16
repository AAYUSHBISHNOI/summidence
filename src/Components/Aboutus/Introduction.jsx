import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import founder_img from "../../assets/img/Aboutus/Png/Founder_Varun_Dewan.png";
import co_founder_img from "../../assets/img/Aboutus/Png/Co-Founder-Winnie-Woo.png";

const Introduction = () => {
  return (
    <div className="space_introduction px-1">
      <Container>
        <Row className="mt-lg-5 mt-md-3 pt-5">
          <Col lg={4}>
            <div>
              <img
                className="w-100 h-100 img_about_us"
                src={co_founder_img}
                alt="co_founder_img"
              />
              <h2 className="fs_26 fw-bold ff_Poppins txt_clr_dark_blue mt-3 mb-0">
                Winnie Woo
              </h2>
              <p className="fs_14 ff_Poppins txt_clr_dark_blue mb-0">
                CertIVTAA, B.Pharm., B.Pharm.Sci(Hons), M.Pharm.Sci
              </p>
              <p className="ff_Poppins fs_16 fw-normal lh_175 text-black mb-0 mt-4">
                Co-Founder
              </p>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0 me-md-3">
                With over a decade of public speaking experience, Winnie is an
                accomplished Toastmaster and division-level speech competition
                candidate, with a proven ability to inspire and engage. Backed
                by 15+ years of experience in sales within the healthcare
                industry and teaching at university level, Winnie brings a deep
                understanding of the critical role communication plays in
                building trust, confidence, and impactful connections. Dedicated
                to empowering others, Winnie helps individuals master the art of
                clear and confident expression.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="mt-md-4 mt-lg-0">
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2">
                Professional Achievement
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Qualified Pharmacist
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Certified Trainer
                </li>
                {/* <li className="ff_Poppins fw-normal fs_16 lh_175 text-black me-md-5 pe-md-4">
                  Recipient of “Medical Excellence Award” (2023-24)
                </li> */}
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Past president of Glen Iris Toastmasters Club (2023)
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Toastmasters of the Year, Glen Iris Toastmasters Club (2022)
                </li>
                {/* <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Winner of humorous speech competition at area level (2022)
                </li> */}
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Communication coach for multiple businesses and federal
                  government agencies helping their sales and business
                  development teams perform at their best abilities.
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Leadership & Impact
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Regularly present and facilitate medical/clinical data to
                  various healthcare professionals from small group to workshop
                  settings.
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Provides mentorship professionally over the past 10 years
                </li>
                {/* <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Facilitation in workshops in healthcare industry
                </li> */}
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Volunteers as a mentor to community care groups for young
                  adults
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Mentors young and new toastmasters members for their
                  individual growth and development in their public speaking
                  journey
                </li>
              </ul>
              {/* <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Teaching Impact
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Coached over 2,000 students from ages 8 to 80
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Specialized programs for neurodiverse learners
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Created youth-focused STEM communication programs
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Mentored startup founders in pitch presentation
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Regular workshop leader at major tech conferences
                </li>
              </ul> */}
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Philosophy
              </p>
              <p className="fs_16 ff_Poppins fw-medium lh_175 txt_clr_dark_blue mb-2 mt-3">
                “I believe public speaking is a journey of self-discovery that
                builds confidence and unlocks your potential. Through coaching,
                regular practice, and embracing your inner voice, you can
                communicate authentically, inspire others, and grow into the
                leader you’re meant to be.”
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={4}>
            <div>
              <img
                className="w-100 h-100 img_about_us"
                src={founder_img}
                alt="founder_img"
              />
              <h2 className="fs_26 fw-bold ff_Poppins txt_clr_dark_blue lh_215 mb-0">
                Varun Dewan
              </h2>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0">
                Co-Founder
              </p>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0 me-md-3">
                Varun combines his technology expertise and communication skills
                at Summidence. His passion for public speaking, driven by his
                belief in its ability to boost self-confidence and leadership,
                has been pivotal in helping individuals find their voice.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="mt-md-4 mt-lg-0">
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2">
                Professional Achievement
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Senior Technology Executive who has delivered speeches in
                  multiple conferences and continues to do so.
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Executive committee members of Glen Iris Toastmasters.
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Communication coach for multiple businesses and federal
                  government agencies helping their sales and business
                  development teams perform t their best abilities.
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Leadership & Impact
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Mentored over 100 professionals in executive communication .
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Founder of conversational AI tool that helps in evaluating
                  speeches .
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Regular contributor to various Technology Leadership forums .
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Advisory member for NFPs with Aboriginal affairs at their
                  heart .
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Philosophy
              </p>
              <p className="fs_16 ff_Poppins fw-medium lh_175 txt_clr_dark_blue mb-2 mt-3">
                "Public speaking is a journey. We constantly evolve and often
                surprise ourselves with what we are truly capable of. I call it
                finding our voice”
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NuturingFuture = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state

  return (
    <div className="mb-5 pb-lg-5 px-2 px-md-1">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="ff_Poppins fw-bold fs_36 lh_132 common_clr_blue para_kids_tab mb-0">
            Nurturing Future Leaders: Comprehensive Programs for Emotional and
            Social Growth
          </h2>
          <p className="ff_Poppins fw-medium fs_18 lh_151 common_clr_black para_nuture mt-2 mb-0">
            Our programs foster emotional intelligence, critical thinking, and
            confidence, with parents observing notable improvements in their
            children's self-assurance and academic performance.
          </p>
        </div>
        <div class="timeline mt-lg-5 mt-3">
          <div class="timelinecontainer left pt-0">
            <div class="content pt-0">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Beyond Public Speaking
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                Our programs enhance emotional intelligence, critical thinking,
                and social skills. Children develop empathy, social awareness,
                structured thinking, and problem-solving abilities. These skills
                foster leadership, friendships, teamwork, and academic
                excellence through better class participation and learning.
              </p>
            </div>
          </div>
          <div class="timelinecontainer right">
            <div class="content">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Our Programs Include
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                Speech preparation structure, body language basics, introduction
                to pauses, gestures to bring impact to presentations and
                increase listening skills to evaluate speeches and self improve
                them. Personal evaluation to individual speeches in self and
                group learning environment.
              </p>
            </div>
          </div>
          <div class="timelinecontainer left pt-0">
            <div class="content pt-0">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Success Indicators
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                Students observe self improvement in speech giving abilities and
                increase in their confidence. Marked improvement in every speech
                that is incrementally delivered.
              </p>
            </div>
          </div>
          <div class="timelinecontainer right">
            <div class="content">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Investment in Your Child's Future
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                We offer flexible programs, including weekend workshops,
                after-school sessions, holiday camps, private coaching, and
                group classes. Each program features an initial assessment,
                regular progress reports, parent consultations, video
                recordings, and a certificate of completion.
              </p>
            </div>
          </div>
          <div class="timelinecontainer left pt-0">
            <div class="content pt-0">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Special Features
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                We provide a safe learning program combining age and skill
                appropriate group of students and provide them a safe space to
                learn from each other. Commending each other for progress made
                is central to how we learn together. Use of AI technology is an
                additional benefit to joining Summidence.
              </p>
            </div>
          </div>
        </div>
        <div class="timelinecontainer right">
          <div class="content">
            <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
              Why Public Speaking is Your Gateway to Growth
            </h2>
            <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
              Public speaking isn’t just about delivering presentations—it’s
              about discovering your authentic voice and unlocking your full
              potential by commanding attention, building unshakable confidence,
              articulating your vision, transforming nervous energy into
              charisma, and developing executive presence to accelerate career
              growth.
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <Link
            to="/our-contact-us"
            className="common_bttn text-white ff_Poppins fw-normal fs_16 text-decoration-none"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NuturingFuture;

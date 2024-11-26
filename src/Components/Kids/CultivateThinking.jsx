import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Down_arrow } from "../common/Icon";
import boy from "../../assets/img/kids/png/Kid.png";
import Kids_drawing from "../../assets/img/kids/png/kids-do-study.png";
import kids_learning from "../../assets/img/kids/png/Learning-kids.png";
import three from "../../assets/img/svg/3.svg";
import geomatry from "../../assets/img/svg/geomatry.svg";
import logic_and_pattern from "../../assets/img/svg/logic-and-pattern.png";
import problem from "../../assets/img/svg/problem-solving.svg";
const CultivateThinking = () => {
  const [activeTab, setActiveTab] = useState("S2"); // Default active tab

  const tabs = [
    {
      id: "S2",
      description: "Empowering Young Minds: Tailored Learning!",
      className: "s2_tab border_rIght",
    },
    {
      id: "S3",
      description: "Unlocking the Magic of Early Communication!",
      className: "border_rIght",
    },
    {
      id: "S4",
      description: "What Sets Summidence Kids Apart?",
      className: "s4_tab",
    },
  ];
  return (
    <div className="py-5 my-xl-5">
      <Container className="pt-md-5 mt-xl-5 custom_container">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <h3 className="ff_Poppins fw-bold text-center fs_48 lh_151 common_clr_blue mb-3">
            Why Public Speaking Matters for Your Child
          </h3>
          <p className="text-center ff_Poppins fw-normal fs_16 lh_151 color_light_black mb-0 para_kids_tab">
            A Foundation for Lifelong Success Did you know? 75% of children
            experience speech anxiety, yet early exposure to public speaking can
            turn this fear into their greatest strength.
          </p>
        </div>
        <div className="nav_tab mx-auto row">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`col_4 d-flex align-items-center justify-content-center flex-column cursor-pointer position-relative ${
                tab.className
              } ${activeTab === tab.id ? "activetab" : ""}`}
              onClick={() => setActiveTab(tab.id)} // Set active tab on click
            >
              <span
                className={`position-absolute down_arrow ${
                  activeTab === tab.id ? "" : "d-none"
                }`}
              >
                <Down_arrow />
              </span>
              <p
                className={`txt_clr_orange ff_Poppins fw-medium text-center fs_16 lh_140 mb-0 ${
                  activeTab === tab.id ? "active" : ""
                } `}
              >
                {tab.label}
              </p>
              <p
                className={`ff_Poppins fw-medium fs_16 text-center lh_140 mb-0 txt_clr_orange ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                {tab.description}
              </p>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane ${
                activeTab === tab.id ? "active" : "d-none"
              }`}
            >
              {activeTab === "S2" && (
                <>
                  <div className="header-div mb-4 text-center">
                    <h2 className="ff_Poppins fw-semibold fs_48 lh_140 common_clr_blue mb-0">
                      Our Unique Approach for Young Minds
                    </h2>
                    <p className="ff_Poppins fw-semibold fs_36 lh_132 text-black mb-0">
                      Age-Tailored Programs
                    </p>
                  </div>
                  <Row className="pt-5 align-items-center">
                    <Col lg={5}>
                      <img
                        src={boy}
                        alt="boy"
                        className="image_navtab w-100 h-100 object-fit-cover"
                      />
                    </Col>
                    <Col lg={7} className="mt-4 mt-lg-0">
                      <div className="d-md-flex gap-4 mb-4 pb-2">
                        <span>
                          <img src={three} alt="three" />
                        </span>
                        <div className="d-flex flex-column mt-4 mt-md-0">
                          <p className="ff_Poppins fw-semibold fs_32 lh_140 text-black mb-0">
                            Little Stars (Ages 6-8)
                          </p>
                          <p className="ff_Poppins fw-medium fs_16 lh_132 ms-2 text-black mb-0 mt-1 mxw_tab_content">
                            Engaging storytelling, creative games, voice
                            discovery, confidence-building exercises, and public
                            speaking through play.
                          </p>
                        </div>
                      </div>
                      <div className="d-md-flex gap-4 mb-4 pb-2">
                        <span>
                          <img src={geomatry} alt="three" />
                        </span>
                        <div className="d-flex flex-column mt-4 mt-md-0">
                          <p className="ff_Poppins fw-semibold fs_32 lh_140 text-black mb-0">
                            Young Speakers (Ages 9-12)
                          </p>
                          <p className="ff_Poppins fw-medium fs_16 lh_132 ms-2 text-black mb-0 mt-1 mxw_tab_content">
                            Structured presentation skills, creative
                            storytelling, basic debate, speech organization, and
                            performance confidence.
                          </p>
                        </div>
                      </div>
                      <div className="d-md-flex gap-4 mb-4 pb-2">
                        <span>
                          <img src={logic_and_pattern} alt="three" />
                        </span>
                        <div className="d-flex flex-column mt-4 mt-md-0">
                          <p className="ff_Poppins fw-semibold fs_32 lh_140 text-black mb-0">
                            Teen Leaders (Ages 13-16)
                          </p>
                          <p className="ff_Poppins fw-medium fs_16 lh_132 ms-2 text-black mb-0 mt-1 mxw_tab_content">
                            Advanced presentation techniques, debate skills,
                            leadership communication, interview preparation, and
                            social media presence.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
              {activeTab === "S3" && (
                <>
                  <div className="header-div mb-4 text-center d-flex justify-content-center align-items-center">
                    <h2 className="ff_Poppins fw-semibold fs_48 lh_140 para_kids_tab common_clr_blue mb-0">
                      Unlock Your Child's Potential: The Magic of Early
                      Communication Skills
                    </h2>
                  </div>
                  <Row className="pt-5 align-items-center">
                    <Col lg={5}>
                      <img
                        src={Kids_drawing}
                        alt="boy"
                        className="image_navtab w-100 h-100"
                      />
                    </Col>
                    <Col lg={7} className="mt-4 mt-lg-0">
                      <div className="mb-4 pb-2">
                        <p className="ff_Poppins fw-semibold fs_36 lh_140 text-black mb-0">
                          The Magic of Early Communication Skills
                        </p>
                        <p className="ff_Poppins fw-medium fs_16 lh_175 ms-2 text-black mb-0 mt-1 mxw_tab_content">
                          Watch your child bloom with newfound confidence as
                          they learn to express ideas clearly and joyfully.
                          Early communication skills help them build lasting
                          friendships, excel in school presentations, develop
                          leadership abilities, stand out in extracurricular
                          activities, and cultivate resilience and
                          self-assurance.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
              {activeTab === "S4" && (
                <>
                  <div className="header-div mb-4 text-center d-flex justify-content-center align-items-center">
                    <h2 className="ff_Poppins fw-semibold fs_48 lh_140 para_kids_tab common_clr_blue mb-0">
                      Building Confidence Through Personalized Learning at
                      Summidence Kids
                    </h2>
                  </div>
                  <Row className="pt-5 align-items-center">
                    <Col lg={5}>
                      <img
                        src={kids_learning}
                        alt="boy"
                        className="image_navtab w-100 h-100"
                      />
                    </Col>
                    <Col lg={7} className="mt-4 mt-lg-0">
                      <div className="mb-4 pb-2">
                        <p className="ff_Poppins fw-semibold fs_36 lh_140 text-black mb-0">
                          What Makes Summidence Kids Special?
                        </p>
                        <p className="ff_Poppins fw-medium fs_16 lh_175 ms-2 text-black mb-0 mt-1 mxw_tab_content">
                          We focus on child-centered learning with small groups,
                          personalized attention, and a supportive environment
                          that allows children to progress at their own pace.
                          Our expert guidance comes from certified youth coaches
                          with backgrounds in child psychology and education,
                          ensuring regular progress assessments and updates for
                          parents.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CultivateThinking;

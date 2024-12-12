import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col, Container, Row } from "react-bootstrap";

const Belajar = () => {
  const sectionRef = useRef(null);

  const stats = [
    { id: 1, value: 87, text: "Class Participation" },
    { id: 2, value: 92, text: "Social Confidence" },
    { id: 3, value: 78, text: "Reduced Anxiety" },
    { id: 4, value: 85, text: "Academic Performance" },
    { id: 5, value: 90, text: "Home Communication" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all counters
    const counters = sectionRef.current.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const targetValue = +counter.dataset.value;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            counter.innerText = `${Math.round(counter.innerText)}%`;
          },
        }
      );
    });
  }, []);

  return (
    <div className="mb-5 pb-5" ref={sectionRef}>
      <Container className="space_belajar">
        <div className="text-center">
          <h2 className="ff_Poppins fs_48 fw-bold common_clr_blue lh_132">
            Our Impact on Student Success
          </h2>
          <p className="ff_Poppins fw-medium fs_16 lh_125 common_clr_black">
            Transforming Education Through Enhanced Communication Skills
          </p>
        </div>
        <Row className="justify-content-center mt-md-5 pt-md-2">
          {stats.map((stat) => (
            <Col
              md={4}
              lg={2}
              key={stat.id}
              className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
            >
              <div className="box_business_case d-flex justify-content-center align-items-center">
                <p
                  className="counter ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0"
                  data-value={stat.value}
                >
                  0%
                </p>
              </div>
              <p className="ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
                {stat.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Belajar;

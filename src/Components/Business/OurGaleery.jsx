import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_one from "../../assets/img/Business/Img/Png/Our-Gallery-1.jpeg";
import img_two from "../../assets/img/Business/Img/Png/Our-Gallery-2.jpeg";
import img_three from "../../assets/img/Business/Img/Png/Our-Gallery-4.jpeg";
import img_four from "../../assets/img/Business/Img/Png/Our-Gallery-5.jpeg";
import img_five from "../../assets/img/Business/Img/Png/Our-Gallery-6.jpeg";
import img_six from "../../assets/img/Business/Img/Png/Our-Gallery-7.jpeg";

const OurGaleery = () => {
  return (
    <div>
      <Container className="p-lg-0 ">
        <div className="text-center mt-md-5 pt-lg-5">
          <h2 className=" ff_Poppins fs_56 fw-bold lh_125 common_clr_blue mb-0">
            Our Gallery
          </h2>
          <Row className="d-flex justify-content-center align-items-center mt-4">
            {[img_one, img_two, img_three, img_four, img_five, img_six].map(
              (img, index) => {
                const marginClasses = [
                  "mt-3 md:!mt-0 lg:!mt-0", // Image 1
                  "mt-3 md:!mt-0 lg:!mt-0", // Image 2
                  "mt-3 md:!mt-0 lg:!mt-0", // Image 3
                  "mt-3 md:!mt-5 lg:!mt-5", // Image 4
                  "mt-3 md:!mt-5 lg:!mt-5", // Image 5
                  "mt-3 md:!mt-5 lg:!mt-5", // Image 6
                ];

                return (
                  <Col
                    key={index}
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      className={`img_ou_gallery ${marginClasses[index]}`}
                      src={img}
                      alt={`Gallery Image ${index + 1}`}
                    />
                  </Col>
                );
              }
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurGaleery;

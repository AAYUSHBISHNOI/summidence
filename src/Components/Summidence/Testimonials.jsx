import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import man_img from "../../assets/img/webp/Testimonials-1.jpeg";
import testimonials from "../../assets/img/webp/Testimonials-2.jpeg";
import comma_img from "../../assets/img/webp/comma.png";

const Testimonials = () => {
  return (
    <>
      <Container className="space_testimonials">
        <h2 className="ff_Poppins fw-semibold fs_48 lh_118 common_clr_black text-center pb-3">
          Testimonials
        </h2>
        <div className=" d-flex flex-column flex-md-row justify-content-center gap-5 mt-5 pt-5">
          <div className="position-relative">
            <div className="d-flex gap-3 gap-md-5 align-items-center position-absolute man_img_slider">
              <img className=" w-100 h-100 slider_img" src={man_img} alt="" />
              <img className=" w-100 h-100 comma_img" src={comma_img} alt="" />
            </div>
            <div className="card_slider w-100 h1 d-flex flex-column justify-content-center align-items-center">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0 mt-4 mt-md-0">
                Sayali
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-lg-3 mb-0">
                Marketing Officer
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-1 mt-md-2 mt-lg-4">
                From the very beginning, your valuable insights, encouragement,
                and constructive feedback have played a key role in boosting my
                confidence and improving my communication skills. Your hard work
                and dedication behind the scenes have not gone unnoticed, and we
                deeply appreciate all you’ve done to keep everything running
                smoothly.
              </p>
            </div>
          </div>
          <div className="position-relative mt-5 mt-md-0">
            <div className="d-flex gap-3 gap-md-5 align-items-center position-absolute man_img_slider">
              <img
                className=" w-100 h-100 slider_img"
                src={testimonials}
                alt=""
              />
              <img className=" w-100 h-100 comma_img" src={comma_img} alt="" />
            </div>
            <div className="card_slider w-100 h1 d-flex flex-column justify-content-center align-items-center">
              <h2 className="ff_Jakarta fw-semibold fs_32 common_clr_black lh_77 mb-0">
                Jessica
              </h2>
              <p className="ff_Jakarta fw-medium fs_20 lh_100 common_clr_black mt-lg-3 mb-0">
                Senior Director of Operations
              </p>
              <p className="ff_Jakarta fw-medium fs_16 txt_clr_grey lh_122 text-center mb-0 mt-1 mt-md-2 mt-lg-4">
                Winnie and Varun were very resourceful and provide us a lot of
                tips and tricks during the 3 Speechscraft sessions. This course
                really boosted my confidence in public speaking and speech
                writing skills. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;

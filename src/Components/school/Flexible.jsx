import React from "react";
import { Container } from "react-bootstrap";
import star_img from "../../assets/img/svg/Star.svg";
import { Arrow, Integration, SpecialEvent } from "../common/Icon";
import { Link } from "react-router-dom";

const Flexible = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <h3 className="fw-bold ff_Poppins text_unlock common_clr_blue lh_132 text-center">
          Flexible Implementation Options
        </h3>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 mt-3 mt-md-5">
          <div className="card_you_beyond w-100 h-100">
            <Integration />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2">
              Curriculum Integration
            </p>
            <div className=" d-flex align-items-center mt-2 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                Weekly speaking labs
              </p>
            </div>
            <div className=" d-flex align-items-center mt-1 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                After-school programs
              </p>
            </div>
            <div className=" d-flex align-items-center mt-1 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                Special workshop series
              </p>
            </div>
          </div>
          <div className="card_you_beyond w-100 h-100">
            <SpecialEvent />
            <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2">
              Special Events
            </p>
            <div className=" d-flex align-items-center mt-2 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                Weekly speaking labs
              </p>
            </div>
            <div className=" d-flex align-items-center mt-1 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                After-school programs
              </p>
            </div>
            <div className=" d-flex align-items-center mt-1 gap-2">
              <Arrow />
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                Special workshop series
              </p>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center mt-5">
          <Link
            to="/upcoming-programs"
            className="common_bttn text-white ff_Poppins fw-normal fs_16 text-decoration-none"
          >
            Upcoming programs
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Flexible;

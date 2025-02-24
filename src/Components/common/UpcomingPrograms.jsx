import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import upcomingprograms from "../../assets/img/webp/UpcomingPrograms.png";
import man_img from "../../assets/img/webp/Contact-us.jpeg";
import { Link } from "react-router-dom";

const UpcomingPrograms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    program: "", // New field for Programs dropdown
    message: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and form submission logic here...
  };

  return (
    <div>
      <Container>
        <div className=" d-flex justify-content-center mt-5 pt-5">
          <img
            className="img_upcoming w-100 h-100"
            src={upcomingprograms}
            alt=""
          />
        </div>
        <div className=" my-3 lg:my-5 d-flex justify-content-center text-center">
          <p className=" ff_Jakarta fs_20 lh_132 fw-normal text-black">
            "Coming soon", please
            <Link
              to="/our-contact-us"
              className=" ff_Poppins fw-normal fs_26 text-decoration-none common_clr_blue mx-2"
            >
              Contact Us
            </Link>
            for further information .
          </p>
        </div>

        <div className="space_getin_touch" id="contact_us">
          <Container>
            <Row className="d-flex justify-content-between align-items-center">
              <Col lg={6}>
                <img className="img_get_in_touch" src={man_img} alt="" />
              </Col>
              <Col lg={5} className="mt-5 mt-lg-0">
                <div className="border_col position-relative p-4">
                  <h2 className="ff_Jakarta fw-semibold fs_36 lh_175 text-black mb-0">
                    Get In Touch Anytime
                  </h2>
                  <Form onSubmit={handleSubmit} className="mt-5">
                    {["name", "email", "phone"].map((field) => (
                      <Form.Group
                        key={field}
                        controlId={field}
                        className={`floating-label mt-4 ${
                          field === "message" ? "textarea-group" : ""
                        }`}
                      >
                        <Form.Control
                          as={field === "message" ? "textarea" : "input"}
                          rows={field === "message" ? 3 : undefined}
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          placeholder=" "
                          className="bg-transparent form-control"
                          required
                        />
                        <Form.Label className="floating-label-text">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </Form.Label>
                      </Form.Group>
                    ))}

                    {/* Dropdown for Enquiry Category */}
                    <Form.Group
                      controlId="businessType"
                      className="floating-label mt-4"
                    >
                      <Form.Select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="bg-transparent form-control"
                        required
                      >
                        <option value="">Select Enquiry Category</option>
                        <option value="Business">Enquiry for Business</option>
                        <option value="Schools">Enquiry for Schools</option>
                        <option value="Students">Enquiry for Students</option>
                        <option value="Self">Enquiry for Self</option>
                      </Form.Select>
                      <Form.Label className="floating-label-text">
                        Enquiry Category
                      </Form.Label>
                    </Form.Group>

                    {/* New Dropdown for Programs */}
                    <Form.Group
                      controlId="program"
                      className="floating-label mt-4"
                    >
                      <Form.Select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="bg-transparent form-control"
                        required
                      >
                        <option value="">Select Program</option>
                        <option value="workshops">Upcoming workshops</option>
                        <option value="kids">Kids programs </option>
                      </Form.Select>
                      <Form.Label className="floating-label-text">
                        Programs
                      </Form.Label>
                    </Form.Group>

                    {/* Message Field */}
                    <Form.Group
                      controlId="message"
                      className="floating-label mt-4 textarea-group"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        className="bg-transparent form-control"
                        required
                      />
                      <Form.Label className="floating-label-text">
                        Message
                      </Form.Label>
                    </Form.Group>

                    {error && (
                      <p className="text-danger fw-semibold mb-3">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="form_bttn mt-3 ff_Jakarta fw-semibold text-white fs_32 lh_118"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default UpcomingPrograms;

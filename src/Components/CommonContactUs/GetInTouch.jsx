import React, { useState, useRef } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import man_img from "../../assets/img/webp/Contact-us.jpeg";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    program: "",
    message: "",
  });
  const [error, setError] = useState("");
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, businessType, program, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !businessType.trim() ||
      !program.trim() ||
      !message.trim()
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");

    try {
      await emailjs.sendForm(
        "service_4yd4mrh", 
        "template_9l9po8j", 
        formRef.current,
        "0kfU2-1AWV0UJWEGL" 
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        program: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="space_getin_touch" id="contact_us">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col lg={6}>
            <img className="img_get_in_touch" src={man_img} alt="Contact us" />
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className="border_col position-relative p-4">
              <h2 className="ff_Jakarta fw-semibold fs_36 lh_175 text-black mb-0">
                Get In Touch Anytime
              </h2>
              <Form ref={formRef} onSubmit={handleSubmit} className="mt-5">
                {["name", "email", "phone"].map((field) => (
                  <Form.Group
                    key={field}
                    controlId={field}
                    className="floating-label mt-4"
                  >
                    <Form.Control
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

                {/* Dropdown for Programs */}
                <Form.Group controlId="program" className="floating-label mt-4">
                  <Form.Select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="bg-transparent form-control"
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="workshops">Upcoming workshops</option>
                    <option value="kids">Kids programs</option>
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
  );
};

export default GetInTouch;

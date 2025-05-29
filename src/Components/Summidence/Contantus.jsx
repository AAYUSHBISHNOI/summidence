// import React, { useState, useRef } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import contact_image from "../../assets/img/webp/contact-image.png";
// import emailjs from "@emailjs/browser";

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [error, setError] = useState("");
//   const formRef = useRef();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, phone, message } = formData;

//     if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
//       setError("Please fill out all fields.");
//     } else if (!/^\d{10}$/.test(phone)) {
//       setError("Please enter a valid 10-digit phone number.");
//     } else {
//       setError("");

//       try {
//         await emailjs.sendForm(
//           "service_4yd4mrh", // Replace with your EmailJS Service ID
//           "template_ll9zkl7", // Replace with your EmailJS Template ID
//           formRef.current,
//           "nOfFALd1D0Cn_ixqt" // Replace with your EmailJS Public Key
//         );

//         setFormData({ name: "", email: "", phone: "", message: "" });
//         alert("Message sent successfully!");
//       } catch (err) {
//         console.error(err);
//         setError("Failed to send message. Please try again later.");
//       }
//     }
//   };

//   return (
//     <Container className="space_contact custom_container px-4 mt-5 pt-md-5">
//       <Row className="row_bg pb-5 pb-md-0 row_border">
//         <Col md={6} className="p-0 pe-lg-3">
//           <img
//             className="w-100 h-100 contact_img_rds object-fit-cover"
//             src={contact_image}
//             alt="Contact"
//           />
//         </Col>
//         <Col md={6} className="text-center text-md-start pb-md-5 mt-4">
//           <h2 className="ff_Jakarta fw-semibold fs_36 lh_175 text-white mb-0">
//             Contact Us
//           </h2>
//           <p className="ff_Jakarta fw-light fs_16 lh_132 text-white mt-2 mb-0">
//             Feel free to contact us anytime. We will get back to you
//             <span className="d-md-block">as soon as we can.</span>
//           </p>
//           <Form ref={formRef} onSubmit={handleSubmit} className="mt-5 pt-1">
//             <Form.Group controlId="name">
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Name"
//                 className="bg-transparent border-0 font-md fw-normal text-white form_txt form-control"
//                 required
//                 aria-label="Name"
//               />
//             </Form.Group>
//             <Form.Group controlId="email" className="mt-5">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="bg-transparent border-0 font-md fw-normal form_txt text-white form-control"
//                 required
//                 aria-label="Email"
//               />
//             </Form.Group>
//             <Form.Group controlId="phone" className="mt-5">
//               <Form.Control
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 onKeyPress={(e) => {
//                   if (!/^\d$/.test(e.key)) {
//                     e.preventDefault();
//                   }
//                 }}
//                 placeholder="Phone Number"
//                 className="bg-transparent border-0 font-md fw-normal form_txt text-white form-control"
//                 required
//                 aria-label="Phone Number"
//                 maxLength="10"
//                 inputMode="numeric"
//                 pattern="\d*"
//                 title="Please enter a valid 10-digit phone number."
//               />
//             </Form.Group>
//             <Form.Group controlId="message" className="mt-5">
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Message"
//                 className="bg-transparent border-0 font-md fw-normal form_txt text-white form-control"
//                 required
//                 aria-label="Message"
//               />
//             </Form.Group>
//             {error && <p className="text-danger fw-semibold mb-3">{error}</p>}
//             <Button
//               type="submit"
//               className="common_bttn mt-5 ff_Jakarta fw-semibold  lh_118"
//             >
//               SUBMIT
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contactus;

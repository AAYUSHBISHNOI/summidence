// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import contact_image from "../../assets/img/webp/contact-image.png";

// const ContactKids = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     parentName: "",
//     kidsAge: "",
//   });
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, phone, message, parentName, kidsAge } = formData;

//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !phone.trim() ||
//       !message.trim() ||
//       !parentName.trim() ||
//       !kidsAge.trim()
//     ) {
//       setError("Please fill out all fields.");
//     } else if (!/^\d{10}$/.test(phone)) {
//       setError("Please enter a valid 10-digit phone number.");
//     } else if (!/^\d+$/.test(kidsAge)) {
//       setError("Please enter a valid age for the kids.");
//     } else {
//       setError("");

//       const form = new FormData();
//       form.append("access_key", "c66c76ec-d085-41d1-ba99-f70dfcfadda1");
//       form.append("name", name);
//       form.append("email", email);
//       form.append("phone", phone);
//       form.append("message", message);
//       form.append("parentName", parentName);
//       form.append("kidsAge", kidsAge);

//       try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: form,
//         });

//         if (!response.ok) {
//           throw new Error("There was an issue submitting the form.");
//         }

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//           parentName: "",
//           kidsAge: "",
//         });
//         alert("Message sent successfully!");
//       } catch (err) {
//         setError("Failed to send message. Please try again later.");
//       }
//     }
//   };

//   return (
//     <Container className="space_contact custom_container mt-md-5 pt-md-5 px-4 px-md-1">
//       <Row className="row_bg pb-5 pb-md-0 row_border">
//         <Col md={6} className="p-0 pe-md-3">
//           <img
//             className="w-100 h-100 contact_img_rds"
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
//           <Form onSubmit={handleSubmit} className="mt-5 pt-1">
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
//             <Form.Group controlId="parentName" className="mt-5">
//               <Form.Control
//                 type="text"
//                 name="parentName"
//                 value={formData.parentName}
//                 onChange={handleInputChange}
//                 placeholder="Name of Parent"
//                 className="bg-transparent border-0 font-md fw-normal text-white form_txt form-control"
//                 required
//                 aria-label="Name of Parent"
//               />
//             </Form.Group>
//             <Form.Group controlId="kidsAge" className="mt-5">
//               <Form.Control
//                 type="number"
//                 name="kidsAge"
//                 value={formData.kidsAge}
//                 onChange={handleInputChange}
//                 placeholder="Age of Kids"
//                 className="bg-transparent border-0 font-md fw-normal text-white form_txt form-control"
//                 required
//                 aria-label="Age of Kids"
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
//               className="form_bttn mt-5 ff_Jakarta fw-semibold fs_32 lh_118"
//             >
//               Send
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactKids;

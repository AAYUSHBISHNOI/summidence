import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactBusiness from "../Kids/ContactKids";
import cross from "../../assets/img/webp/Cross.svg";

const NuturingFuture = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state
  const [showContactForm, setShowContactForm] = useState(false); // Track the contact form visibility

  const toggleContactForm = () => {
    setShowContactForm((prev) => {
      const newState = !prev;
      // Add or remove the 'overflow-hidden' class based on the new state
      if (newState) {
        document.body.classList.add("overflow-hidden"); // Prevent scrolling when form is open
      } else {
        document.body.classList.remove("overflow-hidden"); // Allow scrolling when form is closed
      }
      return newState;
    });
  };

  const closeContactForm = () => {
    setShowContactForm(false); // Close the modal
    document.body.classList.remove("overflow-hidden"); // Ensure class is removed when closing the modal
  };
  return (
    <div className="mb-5 pb-lg-5 px-2 px-md-1">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="ff_Poppins fw-bold fs_36 lh_132 common_clr_blue para_kids_tab mb-0">
            Nurturing Future Leaders: Comprehensive Programs for Emotional and
            Social Growth
          </h2>
          <p className="ff_Poppins fw-medium fs_18 lh_151 common_clr_black para_nuture mt-2 mb-0">
            Our programs build emotional intelligence, critical thinking, and
            confidence, with 92% of parents noting increased self-assurance and
            84% improved academics.
          </p>
        </div>
        <div class="timeline mt-lg-5 mt-3">
          <div class="timelinecontainer left pt-0">
            <div class="content pt-0">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Beyond Public Speaking
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                Our programs foster emotional intelligence, enhancing emotional
                understanding, empathy, and social awareness. We promote
                critical thinking through structured thought processes, argument
                building, and creative problem-solving. Additionally, children
                develop social skills that lead to natural leadership, stronger
                friendships, and improved team collaboration, all contributing
                to academic excellence through enhanced class participation and
                learning abilities.
              </p>
            </div>
          </div>
          <div class="timelinecontainer right">
            <div class="content">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Our Programs Include
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                We offer weekly sessions consisting of 90-minute workshops that
                provide practice opportunities, peer interaction, performance
                recordings, and progress tracking. Special events like mini-TED
                talks, story showcases, parent demonstration days, public
                speaking competitions, and group performances enrich the
                experience. Take-home materials, including practice exercises,
                parent guidance, progress journals, video recordings, and
                achievement certificates, support ongoing development.
              </p>
            </div>
          </div>
          <div class="timelinecontainer left pt-0">
            <div class="content pt-0">
              <h2 className="ff_Poppins fw-semibold fs_20 lh_125 common_clr_black mb-0">
                Success Indicators
              </h2>
              <p className=" ff_Poppins fw-medium fs_14 lh_132 common_clr_black mb-0 mt-2">
                Our programs yield impressive results: 92% of parents see
                improved confidence, 87% notice better social skills, 84% report
                enhanced academic performance, 90% observe improved family
                communication, and 89% see reduced social anxiety.
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
                We provide a safe learning environment with certified
                instructors, age-appropriate content, a bullying-free zone, and
                positive reinforcement. Regular updates, including weekly
                progress reports, video highlights, parent consultations,
                achievement celebrations, and a development roadmap, empower
                your child to develop lasting communication skills, preparing
                them for a bright future in school, relationships, and beyond.
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
          <button
            className="common_bttn text-white ff_Poppins fw-normal fs_16"
            onClick={toggleContactForm}
          >
            Contact Us
          </button>
        </div>
        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="contact-modal">
            <div className="contact-modal-content">
              <button onClick={closeContactForm} className="close-btn">
                <img src={cross} alt="" />
              </button>
              <ContactBusiness closeModal={closeContactForm} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NuturingFuture;

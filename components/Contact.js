import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <div>
          <p>
            Have a project in mind you'd like some help with? I'd be happy to
            connect!
          </p>
          <ContactForm />
        </div>
      </div>
      {showModal && (
        <Modal
          closeModal={handleCloseModal}
          message={"please fill out the form"}
        />
      )}
    </section>
  );
};

export default Contact;

const Modal = ({ message, closeModal }) => {
  return (
    <div className="modal">
      <div>
        <span className="modal-message">{message}</span>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

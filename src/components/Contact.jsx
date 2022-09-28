import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    alert("submitted");
    e.preventDefault();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Reach out to me via email</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input placeholder="name" type="text" />
          <input placeholder="email" type="email" />
          <textarea placeholder="message"></textarea>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        <a rel="noreferrer" target="_blank" href="https://github.com/ivnmnndz">
          <i
            style={{ fontSize: "36px" }}
            className="fa-brands fa-square-github"
          ></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ivanmenendez001/"
        >
          <i style={{ fontSize: "36px" }} className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="form-cont">
      <form
        action="https://formspree.io/f/xlezkrge"
        method="post"
        className="contact-form m-2 p-5 n-box2"
      >
        <h3 className="font-bold">Contact Us</h3>
        <hr />
        <input
          name="user-name"
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          required
        />
        <input
          name="user-mail"
          type="text"
          className="form-control mb-2"
          placeholder="email"
          required
        />
        <textarea
          name="text"
          type="text"
          className="form-control mb-2"
          rows={3}
          defaultValue={"Write Your Message Here "}
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

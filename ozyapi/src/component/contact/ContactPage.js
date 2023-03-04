import React from "react";

const ContactPage = () => {
  return (
    <div className="c-p-form container">
      <div className="c-p-form-cont card c-p-card shadow-lg rounded">
        <form
          action="https://formspree.io/f/xlezkrge"
          method="post"
          className="c-p-contact-form m-2 "
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
    </div>
  );
};

export default ContactPage;

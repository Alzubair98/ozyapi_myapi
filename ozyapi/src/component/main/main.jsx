import React from "react";
import Intro from "../home-page/intro";
import Article from "../articles/article";
import Blog from "../blog/blog";
import Footer from "../footer/footer";
import Services from "../services/services";
import ContactForm from "../contact/ContactForm";

const Main = (props) => {
  return (
    <>
      <Intro onSearch={props.onSearch} />
      <Services />
      <Article />
      <Blog />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Main;

import React, { useState } from "react";
import Login from "../auth/Login";
import Rigstration from "../auth/Registration";
import "./home.css";

const Home = (props) => {
  const [welcome, setWelcome] = useState(false);

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"];
    if (welcome) classArr.push("send-right");
    return classArr.join(" ");
  };

  const setFormClass = () => {
    const classArr = ["form-side cfb"];
    if (welcome) classArr.push("send-left");
    return classArr.join(" ");
  };

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  };

  return (
    <div className="big-cont">
      <div className="Cont cfb">
        <div className={setBannerClass()}>
          {welcome ? <h2>Hello, New Friend!</h2> : <h2>Welcome Back</h2>}
          <button className="h-button" onClick={() => setWelcome(!welcome)}>
            {welcome ? "Sign In" : "Create Account"}
          </button>
        </div>
        <div className={setFormClass()}>
          {welcome ? (
            <Rigstration handleSuccessfulAuth={handleSuccessfulAuth} />
          ) : (
            <Login handleSuccessfulAuth={handleSuccessfulAuth} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

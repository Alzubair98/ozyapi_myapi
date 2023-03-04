import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Home/home.css";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginErrors: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://127.0.0.1:3001/sessions",
        {
          user: {
            email: user.email,
            password: user.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
          navigate("/");
          console.log("logged in", response);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit} className="sign-up-form cfb">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control mt-2"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button className="h-button" type="submit">
          {" "}
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Home/home.css";

const Rigstration = (props) => {
  const [user, setUser] = useState({
    email: "",
    number: "",
    password: "",
    password_confirmation: "",
    registrationsErrors: "",
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
        "http://127.0.0.1:3001/registrations",
        {
          user: {
            email: user.email,
            number: user.number,
            password: user.password,
            password_confirmation: user.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
          navigate("/");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="form-comp cfb">
      <h1>Create an Account</h1>
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
          type="tel"
          name="number"
          placeholder="Phone Number"
          className="form-control mt-2"
          pattern="[+]{1}[0-9]{11,14}"
          value={user.number}
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
        <input
          type="password"
          name="password_confirmation"
          placeholder="password confirmation"
          className="form-control mt-2"
          value={user.password_confirmation}
          onChange={handleChange}
          required
        />

        <button className="h-button" type="submit">
          {" "}
          Rigister
        </button>
      </form>
    </div>
  );
};

export default Rigstration;

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { BsHouseFill, BsFillKeyFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./intro.css";

const SearchCard = (props) => {
  const [disable, setDisable] = useState(false);

  const SaveToSession = (item) => {
    const sessionRecords =
      JSON.parse(sessionStorage.getItem("user_like")) || [];

    sessionRecords.push(item);
    sessionStorage.setItem("user_like", JSON.stringify(sessionRecords));
    setDisable(true);
  };

  const removeFromWish = (index, item) => {
    // need to clean this function
    const updateRecords = JSON.parse(sessionStorage.getItem("user_like"));
    updateRecords.splice(index, 1);
    sessionStorage.setItem("user_like", JSON.stringify(updateRecords));

    props.removeItem(item);
    setDisable(false);
  };

  return (
    <div key={props.id}>
      <div className="card s-card rounded shadow-lg">
        <div className="Carousel">
          <Carousel fade className="C-C-Carousel">
            {props.images.map((image, index) => (
              <Carousel.Item className="C-C-item" key={index}>
                <img
                  className="C-C-image d-block"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="body">
          <div>
            <h2> {props.type}</h2>
            <h3>{props.desc}</h3>
          </div>
          <div className="d-c-cont">
            <p>
              <ImLocation className="d-c-icon" /> {props.location}
            </p>
            <p>
              <MdBedroomChild className="d-c-icon" /> {props.rooms}
            </p>
            <p>
              <GiBathtub className="d-c-icon" /> {props.baths}
            </p>
          </div>
          <div className="d-c-cont">
            <p>
              <FaMoneyBillAlt className="d-c-icon" /> {props.price}$
            </p>
            <p>
              <BsHouseFill className="d-c-icon" /> {props.size}
            </p>
            <p>
              <BsFillKeyFill className="d-c-icon" /> {props.refrence}
            </p>
          </div>
          <div className="button-cont">
            {props.mode ? (
              <button
                disabled={disable}
                className="btn btn-success"
                id={props.id}
                onClick={() => SaveToSession(props.item)}
              >
                {disable ? "Added to Wishlist" : "add to wishlist"}
              </button>
            ) : (
              <button
                className="btn btn-danger"
                id={props.id}
                onClick={() => removeFromWish(props.index, props.item)}
              >
                Remove from Wishlist
              </button>
            )}
            {props.user && props.user.admin && (
              <button
                onClick={() => props.deleteFromAPI(props.id, props.item)}
                className="btn btn-danger"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

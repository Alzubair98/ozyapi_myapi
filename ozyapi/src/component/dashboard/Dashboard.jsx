import React from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard(props) {
  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData();
    const files = event.target.images.files.length;

    data.append("house[house_type]", event.target.house_type.value);
    data.append("house[real_price]", event.target.real_price.value);
    data.append("house[location]", event.target.location.value);
    data.append("house[owner_number]", event.target.owner_number.value);
    data.append("house[age]", event.target.age.value);
    data.append("house[size]", event.target.size.value);
    data.append("house[rooms]", event.target.rooms.value);
    data.append("house[bath_rooms]", event.target.bath_rooms.value);
    data.append("house[price]", event.target.price.value);
    data.append("house[ref_number]", event.target.ref_number.value);
    // data.append("house[image]", event.target.house_image.files[0]); # upload one image
    for (let i = 0; i < files; i++) {
      data.append("house[images][]", event.target.images.files[i]);
    }
    handleSubmit(data);
  };

  const handleSubmit = (data) => {
    axios
      .post(
        "http://127.0.0.1:3001/houses",
        data,
        { withCredentials: true },
        { headers: { "Content-type": "multipart/form-data" } }
      )
      .then((response) => {
        if (response) {
          console.log("house status", response);
        }
      })
      .catch((error) => {
        console.log("house error", error);
      });
  };

  return (
    <div className="dashbord-cont">
      <form className="form-cont " onSubmit={(e) => handleChange(e)}>
        <div className="col-auto">
          <label className="form-label" htmlFor="house type">
            HOUSE TYPE
          </label>
        </div>

        <input
          className="form-control"
          type="text"
          name="house_type"
          placeholder="house type"
          required
        />

        <label className="form-label" htmlFor="house type">
          REAL PRICE
        </label>

        <input
          className="mt-2 form-control"
          type="number"
          name="real_price"
          placeholder="real price"
          required
        />

        <br />
        <label className="form-label" htmlFor="house type">
          PRICE
        </label>
        <input
          className="mt-2 form-control"
          type="number"
          name="price"
          placeholder="price"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          LOCATION
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="location"
          placeholder="location"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          OWNER NUMBER
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="owner_number"
          placeholder="owner number"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          AGE
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="age"
          placeholder="age"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          SIZE
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="size"
          placeholder="size"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          ROOMS
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="rooms"
          placeholder="rooms"
          required
        />
        <br />
        <label className="form-label" htmlFor="house type">
          BATH ROOMS
        </label>
        <input
          className="mt-2 form-control"
          type="text"
          name="bath_rooms"
          placeholder="bath rooms"
          required
        />
        <br />

        <label className="form-label" htmlFor="house type">
          REF NUMBER
        </label>
        <input
          className="mt-2 form-control"
          type="number"
          name="ref_number"
          placeholder="ref number"
          required
        />

        <br />
        <label className="form-label" htmlFor="house type">
          images
        </label>
        <input
          className="mt-2 form-control"
          type="file"
          multiple
          name="images"
          required
        />
        <br />
        <button type="submit" className="btn btn-primary mt-2 mb-2">
          save house
        </button>
        <br />
      </form>
    </div>
  );
}

export default Dashboard;

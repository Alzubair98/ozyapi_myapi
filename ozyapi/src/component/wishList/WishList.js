import React, { useState } from "react";
import SearchCard from "../home-page/searchCard";

const WishList = () => {
  const [existingRecords, setExistingRecords] = useState(
    JSON.parse(sessionStorage.getItem("user_like")) || []
  );

  const removeItem = (item) => {
    const updateRecords = existingRecords.filter(
      (record) => record.id !== item.id
    );

    setExistingRecords(updateRecords);
  };

  return (
    <div className="D-card">
      {existingRecords.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">NO ITEMS!</h4>
          <p>YOU DONT HAVE ANY THING IN YOUR WISH LIST</p>
          <hr />
        </div>
      ) : (
        existingRecords.map((item, index) => (
          <div className="card" key={item.id}>
            <SearchCard
              item={item}
              mode={false}
              index={index}
              id={item.id}
              type={item.house_type}
              images={item.images_urls}
              desc={item.description}
              location={item.location}
              rooms={item.rooms}
              baths={item.bath_rooms}
              size={item.size}
              price={item.price}
              refrence={item.ref_number}
              removeItem={removeItem}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default WishList;

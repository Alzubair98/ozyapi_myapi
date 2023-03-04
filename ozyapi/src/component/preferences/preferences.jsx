import React, { useEffect } from "react";
import "./preferencess.css";
import { useSelector } from "react-redux";
import { loadHouses } from "../../Redux/Houses/houses";
import { useDispatch } from "react-redux";
import SearchCard from "../home-page/searchCard";

const Preferencess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHouses());
  }, []);
  const state = useSelector((state) => state.storeSlice);
  return (
    <>
      <div className="D-card">
        {state.map((item) => (
          <SearchCard
            item={item}
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
          />
        ))}
      </div>
    </>
  );
};

export default Preferencess;

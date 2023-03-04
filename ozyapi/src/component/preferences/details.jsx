// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { loadHouses } from "../../Redux/Houses/houses";
// import { useDispatch } from "react-redux";

// const Details = (props) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadHouses());
//   }, []);
//   const houses = useSelector((state) => state.storeSlice);
//   const house = houses.filter((item) => item.id === props.buttonId);

//   return (
//     <>
//       {house.map((item) => (
//         <Card
//           d={item.id}
//           type={item.house_type}
//           images={item.images_urls}
//           desc={item.description}
//           location={item.location}
//           rooms={item.rooms}
//           baths={item.bath_rooms}
//         />
//       ))}
//     </>
//   );
// };

// export default Details;

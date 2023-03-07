import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";
import Preferencess from "./component/preferences/preferences";
import Home from "./component/Home/Home";
import Dashboard from "./component/dashboard/Dashboard";
import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Search from "./component/home-page/search";
import WhatsApp from "./component/contact/whatsApp";
import WishList from "./component/wishList/WishList";
import ContactPage from "./component/contact/ContactPage";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  const checkLoginStatus = () => {
    let data = JSON.parse(sessionStorage.getItem("user_id"));

    if (data && user.loggedInStatus === "NOT_LOGGED_IN") {
      setUser({
        loggedInStatus: "LOGGED_IN",
        user: data.user,
      });
      console.log("session storage", data);
    } else if (!data && user.loggedInStatus === "LOGGED_IN") {
      setUser({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {},
      });
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setUser({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });

    sessionStorage.clear();
  };

  const handleLogin = (data) => {
    setUser({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });

    sessionStorage.setItem("user_id", JSON.stringify(data));
  };

  // const [id, setId] = useState(0);

  // const handelid = (e) => {
  //   const button = e.target;
  //   setId(Number(button.id));
  // };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  const deleteFromAPI = (id, item) => {
    const updateRecords = searchResults.filter(
      (record) => record.id !== item.id
    );
    setSearchResults(updateRecords);

    axios
      .post("http://localhost:3001/destroy", {
        house: { id: id },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("delete reservation error", error);
      });

    console.log("item", item);
    console.log("the id", id);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={<Main user={user} onSearch={handleSearch} />}
          />
          <Route path="/preferencess" element={<Preferencess />} />
          <Route
            path="/home"
            element={
              <Home handleLogin={handleLogin} user={user.loggedInStatus} />
            }
          />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          {/* <Route path="/details" element={<Details buttonId={id} />} /> */}
          <Route
            path="/search"
            element={
              <Search
                data={searchResults}
                user={user}
                deleteFromAPI={deleteFromAPI}
              />
            }
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <WhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;

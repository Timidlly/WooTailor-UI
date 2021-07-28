import React, { useState, useEffect } from "react";
import { Links } from "../config/website";
import { useDispatch, useSelector } from "react-redux";
import { locationRemove, corrRemove } from "../actions/locationActions";
export default function Navbar(props) {
  const [address, setAddress] = useState("Finding address");
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("location")) {
      const a = localStorage.getItem("location").replace(/^"(.*)"$/, "$1");
      setAddress(a);
    }
  }, [location]);

  function Remove() {
    dispatch(locationRemove());
    dispatch(corrRemove());
  }

  return (
    <>
      <div className="desktop">
        <div className="desktop-navbar">
          <img
            onClick={() => (window.location.href = "/")}
            src="/images/namelogo.png"
          />

          <div className="search-content" onClick={() => Remove()}>
            <img src="/images/pin.svg" />
            <div className="location">
              {address.substring(0, 28)}{" "}
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>

          <div className="content">
            <div
              onClick={() => (window.location.href = Links[2].link)}
              className="search"
            >
              <i className="fa fa-search" aria-hidden="true"></i> Search
            </div>
            <div
              onClick={() => (window.location.href = Links[1].link)}
              className="search"
            >
              <i className="fa fa-percent" aria-hidden="true"></i> Offers
            </div>
            <div
              onClick={() => (window.location.href = Links[3].link)}
              className="search"
            >
              <i className="fa fa-user-circle-o" aria-hidden="true"></i> Profile
            </div>
            <div
              onClick={() => (window.location.href = Links[4].link)}
              className="search"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
            </div>
          </div>
        </div>
      </div>

      <div className="mobile">
        <div className="mobile-navbar">
          <div className="search-content" onClick={() => Remove()}>
            <img src="/images/pin.svg" />
            <div className="location">
              {address.substring(0, 28)}{" "}
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>

          <div className="content">
            <div
              className="search"
              onClick={() => (window.location.href = Links[1].link)}
            >
              <i className="fa fa-percent" aria-hidden="true"></i> Offers
            </div>
          </div>
        </div>

        <div
          style={{ display: props.visible ? "flex" : "none" }}
          className="footer-nav"
        >
          <i
            onClick={() => (window.location.href = Links[0].link)}
            className="fa fa-home"
            aria-hidden="true"
          ></i>
          <i
            onClick={() => (window.location.href = Links[2].link)}
            className="fa fa-search"
            aria-hidden="true"
          ></i>
          <i
            onClick={() => (window.location.href = Links[3].link)}
            className="fa fa-user-circle-o"
            aria-hidden="true"
          ></i>
          <i
            onClick={() => (window.location.href = Links[4].link)}
            className="fa fa-shopping-cart"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </>
  );
}

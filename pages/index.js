import Head from "next/head";
import React, { useState, useEffect } from "react";

import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { locationAction, corrAction } from "../actions/locationActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useSelector((state) => state.location);
  const corr = useSelector((state) => state.corr);
  const [name, setName] = useState("");

  ///Location

  function displayLocation(latitude, longitude) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({ latLng: latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var add = results[0].formatted_address;
          // var  value=add.split(",");

          // count=value.length;
          // country=value[count-1];
          // state=value[count-2];
          // city=value[count-3];

          const corr = { lat: latitude, lng: longitude };
          dispatch(locationAction(add));
          dispatch(corrAction(corr));
        } else {
          alert("address not found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }

  function showPosition(position) {
    displayLocation(position.coords.latitude, position.coords.longitude);
    // alert( +' '+ position.coords.longitude)
  }

  function CurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Please enable location");
    }
  }

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);

    const latLng = await getLatLng(results[0]);
    dispatch(locationAction(results[0].formatted_address));
    dispatch(corrAction(latLng));
    // console.log(latLng)

    // console.log(results)
    // console.log(results[0].address_components[0].long_name)

    setAddress(value);
    setCoordinates(latLng);
  };

  useEffect(() => {
    if (localStorage.getItem("location")) {
      window.location.href = "/search";
    }

    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name"));
    }
  }, [location, corr]);

  return (
    <>
      <Meta themeColor={open === false ? "#ff5722" : "#fff"} />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <div className="mobile-search">
                <img onClick={handleClose} className="right" src="/right.svg" />
                <input
                  style={{ width: "100%" }}
                  {...getInputProps({
                    placeholder: "Enter area, street name...",
                  })}
                />
                {loading ? (
                  <div className="loading">
                    <div className="loadingio-spinner-rolling-1s0xdpdttrj">
                      <div className="ldio-a8ab71rjvvs">
                        <div></div>
                      </div>
                    </div>{" "}
                  </div>
                ) : (
                  <img className="left" src="/search.svg" />
                )}
              </div>
              <div className="border"></div>

              <div>
                {suggestions.length !== 0 ? (
                  suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#e5e5e5" : "#fff",
                      cursor: "pointer",
                    };

                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, { style })}
                        className="suggestion"
                      >
                        <img src="/gps.svg" />
                        <div className="content">
                          <div className="s"> {suggestion.description}</div>
                        </div>
                      </div>
                      // <div {...getSuggestionItemProps(suggestion, { style })}>
                      //   {suggestion.description}
                      // </div>
                    );
                  })
                ) : (
                  <div
                    onClick={() => {
                      CurrentLocation();
                    }}
                    className="suggestion"
                  >
                    <img src="/gps.svg" />
                    <div className="content">
                      <div className="s">Current Location</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </Dialog>

      <div className="home mobile">
        <div className="first-one"></div>
        <div className="second-one">
          <div className="form">
            <div className="title">Order from wide range of Tailors</div>
            <div className="sub-title">Ready to order from fav Tailors</div>

            <button onClick={handleClickOpen}>Set Delivery Location</button>
            {name.length !== 0 ? (
              <a href="/profile">{name}</a>
            ) : (
              <p>
                <a href="/signup">Signup</a> | <a href="/login">Login</a>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="home-des desktop">
        <div className="main-content">
          <div className="content">
            <div className="nav">
              <motion.div
                initial={{ y: "-20", opacity: 0 }}
                animate={{ y: "20px", opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                className="images-container"
              >
                <img
                  className="logo-desktop"
                  src="/images/namelogo.png"
                  alt="WOOTailor"
                />
              </motion.div>

              <div className="usermenu">
                <div
                  onClick={() => {
                    name.length !== 0
                      ? (window.location.href = "/profile")
                      : (window.location.href = "/login");
                  }}
                  className={
                    active === true ? "btns login active" : "btns login"
                  }
                >
                  {name.length !== 0 ? name : "Login"}
                </div>
                {name.length !== 0 ? (
                  <></>
                ) : (
                  <div
                    onClick={() => {
                      window.location.href = "/signup";
                    }}
                    className={
                      active === false ? "btns login active" : "btns login"
                    }
                  >
                    Signup
                  </div>
                )}
                {/* <Drawer anchor='right' open={true} onClose={}>
         {list(anchor)}
</Drawer> */}
              </div>

              <div className="text-contents">
                <div>
                  <h2>Finding Tailors?</h2>
                  <p>Order dress from favourite tailor near you. </p>
                </div>
                <div className="searchtailor" onClick={() => setOpen(true)}>
                  <input
                    onChange={() => setOpen(true)}
                    type="text"
                    placeholder="Enter your delivery location "
                  />
                  {/* <div className="locate-btn">
<img className="desktop-gps" src='/images/gps.svg'/>
<div className='title-locate'>Locate Me</div>
</div> */}

                  <div className="submit-btn">
                    <div className="find-tailor">SEARCH ME</div>
                  </div>
                </div>

                <div className="cities">POPULAR CITIES IN INDIA</div>
                <div className="notation">
                  We are starting with Noida Tailors and expanding our WOOTailor
                  in all over India. If you want to become a partner please
                  follow this link{" "}
                  <a
                    style={{ color: "orangered" }}
                    href="https://z164ncjhk6d.typeform.com/to/WIHMXjw1"
                  >
                    Become a Partner.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="img"></div>
        </div>
      </div>
    </>
  );
}

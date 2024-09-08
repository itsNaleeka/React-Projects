import React from "react";
import "./container.css";
import PButton from "./pButton";
import AboutusSec from "./aboutusSec";
import Notification from "./notification";
import Popup from "./popup";
import Form from "./form";
import { useState, useEffect } from "react";

function Container() {
  document.title = "CampHeaven | Home";

  const [activePop, setActive] = React.useState(false);

  const [notificationVisible, setNotificationVisible] = useState(true);
  function toggleActive() {
    setActive(!activePop);
  }
  function handleClose() {
    setActive(false);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="body">
      {activePop && (
        <div className="popUp">
          <Popup onClose={handleClose} />
        </div>
      )}

      <div
        className={
          notificationVisible ? "notficationMsg " : "notficationMsg active"
        }
        onClick={toggleActive}
      >
        <Notification>Huge offer for family packages!</Notification>
      </div>

      <div className="section row section-1">
        <div className="leftSection">
          <div className="circle-bg"></div>
          <h1 className="title">
            Experience <span className="pColorText">Nature</span> Like Never
            before
          </h1>
          <p className="description">
            Discover your perfect camping getaway with our easy-to-use booking
            platform. Whether you seek the serenity of a secluded forest, the
            adventure of a mountain hike, or the beauty of a lakeside retreat,
            we have the perfect spot for you. Book now and start your
            unforgettable outdoor adventure!
          </p>
          <div className="row" style={{ marginTop: "1rem" }}>
            <button
              href="#"
              className="navLink"
              style={{ fontSize: "0.85rem" }}
            >
              edit content
            </button>
            <PButton toLink="#">Book a seat </PButton>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="144"
            viewBox="0 0 130 144"
            fill="none"
          >
            <path
              opacity="0.6"
              d="M13.0969 70.5L12.0239 69.4518L13.0969 70.5ZM12.3138 143.779C13.0203 144.212 13.9437 143.99 14.3762 143.283L21.424 131.769C21.8565 131.062 21.6343 130.139 20.9277 129.706C20.2211 129.274 19.2977 129.496 18.8653 130.203L12.6006 140.438L2.36564 134.173C1.65907 133.74 0.735677 133.963 0.30319 134.669C-0.129297 135.376 0.0928946 136.299 0.799468 136.732L12.3138 143.779ZM93.5447 3.06907C105.401 14.7386 113.676 23.7992 119.016 30.8143C121.685 34.3212 123.597 37.2856 124.855 39.7836C126.119 42.2931 126.681 44.2494 126.747 45.7601C126.811 47.2212 126.415 48.2671 125.696 49.0833C124.94 49.9405 123.718 50.6672 121.929 51.2313C118.318 52.3696 112.969 52.6774 106.302 52.6026C93.1614 52.455 75.2335 50.8142 57.9954 52.0881C40.7232 53.3645 23.6242 57.578 12.0239 69.4518L14.1698 71.5482C24.9877 60.4753 41.1603 56.3404 58.2165 55.0799C75.3067 53.817 92.7641 55.4507 106.269 55.6024C112.924 55.6771 118.713 55.3906 122.831 54.0925C124.906 53.4384 126.695 52.4863 127.946 51.0668C129.233 49.6064 129.838 47.7778 129.744 45.6292C129.653 43.5303 128.898 41.1418 127.535 38.4341C126.165 35.7149 124.137 32.5897 121.403 28.9972C115.935 21.8135 107.542 12.6364 95.649 0.930933L93.5447 3.06907ZM12.0239 69.4518C7.61384 73.9658 4.78234 78.5368 3.20341 83.4727C1.62737 88.3995 1.32884 93.598 1.85308 99.3243C2.37607 105.037 3.72427 111.332 5.48011 118.46C7.25363 125.661 9.40475 133.568 11.6385 142.851L14.5552 142.149C12.3374 132.932 10.1256 124.777 8.39305 117.743C6.64284 110.637 5.34182 104.526 4.84059 99.0507C4.34061 93.5895 4.64287 88.8192 6.06078 84.3867C7.4758 79.9632 10.0314 75.7842 14.1698 71.5482L12.0239 69.4518Z"
              fill="#161616"
            />
          </svg>
        </div>
        <div className="rightSection">
          <img src="camp-bg.png" alt="camp background image" width={"640px"} />
        </div>
      </div>

      <AboutusSec />

      <Form pTitle="Request " sTitle="Campsite Details" />
    </div>
  );
}

export default Container;

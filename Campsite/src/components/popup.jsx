import React, { useEffect, useRef, useState } from "react";
import "./popup.css";
import PButton from "./pButton";

function Popup({ onClose }) {
  const [time, setTime] = React.useState("Morning");
  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMins, setMins] = useState("00");
  const [timerSecs, setSecs] = useState("00");

  let interval = useRef();

  const startTimer = () => {
        const countdownDate = new Date("September 27, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="content">
        <div className="close-btn">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M1.33341 11.8334L0.166748 10.6667L4.83342 6.00002L0.166748 1.33335L1.33341 0.166687L6.00008 4.83335L10.6667 0.166687L11.8334 1.33335L7.16675 6.00002L11.8334 10.6667L10.6667 11.8334L6.00008 7.16669L1.33341 11.8334Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="popTitle">
          <b>Hurry up! </b>Special discount for family members expires in :
        </div>
        <div className="timeSlots">
          <div className="timeSlot">
            <span className="timeTitle">Days</span>
            {timerDays}
          </div>
          <div className="timeSlot">
            <span className="timeTitle">Hours</span>
            {timerHours}
          </div>
          <div className="timeSlot">
            <span className="timeTitle">minutes</span>
            {timerMins}
          </div>
          <div className="timeSlot">
            <span className="timeTitle">seconds</span>
            {timerSecs}
          </div>
        </div>
        <div className="text grey">
          Good {time.toLowerCase()} fellow camper, Do you want to redeem this
          exclusive offer?
        </div>
        <div className="row">
          <button className="popUpBtn">Notify Me</button>
          <PButton className="scale-2">Redeem</PButton>
        </div>
        <img
          src="hand1.png"
          alt="hand image background"
          className="bgImgs img-1"
        />
        <img
          src="hand2.png"
          alt="hand image background"
          className="bgImgs img-2"
        />
      </div>
    </>
  );
}

export default Popup;

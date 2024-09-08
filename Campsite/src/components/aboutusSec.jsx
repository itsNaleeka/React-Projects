import React from 'react'
import PButton from './pButton'
import "../components/container.css";
import '../components/header.css'
import '../App.css'

function AboutusSec() {
  return (
    <>
        <div className="section section-2 col">
        <h1 className="title leftAlign">
          Welcome to <span className="pColorText">CampHeaven</span>
        </h1>
        <p className="description textCenter">
          CampHeaven simplifies camping trips by offering a variety of
          campsites. With a focus on quality, we ensure a great experience for
          every camper. Join us to explore nature, relax, and make memories. The
          easiest way to book your outdoor getaway.
        </p>
        <div className="gallery row">
          <span className="photo" id="p1">
            <img src="camp-1.jpg" alt="camp image" width={"200%"} />
          </span>
          <span className="photo" id="p2">
            <img src="camp-2.jpg" alt="camp image" width={"220%"} />
          </span>
          <span className="photo" id="p3">
            <img src="camp-3.jpg" alt="camp image" width={"220%"} />
          </span>
          <span className="photo" id="p4">
            <img src="camp-4.jpg" alt="camp image" width={"220%"} />
          </span>
          <span className="photo" id="p5">
            <img src="camp-5.jpeg" alt="camp image" width={"220%"} />
          </span>
        </div>
        <PButton className="mt-5">See more</PButton>
      </div>
    </>
  )
}

export default AboutusSec

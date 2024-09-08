import Header from '../components/header'
import "../components/container.css";
import '../components/header.css'
import '../index.css'
import '../App.css'
import AboutusSec from '../components/aboutusSec';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'CampHeaven | About Us';
    }
  )

  return (
    <>
      <Header />
      <AboutusSec/>
    </>
  )
}

export default About

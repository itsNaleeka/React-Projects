import React from 'react'
import Header from '../components/header'
import AboutusSec from '../components/aboutusSec';

function Contact() {
  document.title = "CampHeaven | Contact Us";

  return (
    <div className='col'>
      <Header />
      <h1 style={{marginTop: '8rem'}}>Contact US</h1>
    </div>
  )
}

export default Contact

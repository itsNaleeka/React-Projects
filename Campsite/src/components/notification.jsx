import React from 'react'
import { useState } from 'react'
import './notification.css'

function Notification(props) {
  

  return (
    <>
        <div className="notification">
            <button className="notifBtn">
                {props.children}
            </button>
        </div>
    </>
  )
}

export default Notification

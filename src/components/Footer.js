import React from 'react'
import enter from "../assets/images/path.png"

const Footer = () => {
  return (
    <div id='footer'>
        <p>GOT JOKES? GET PAID<br/> FOR SUBMITTING!</p>
        <p className='btn'>SUBMIT JOKE<img src={enter} alt="icon"/></p>
    </div>
  )
}

export default Footer
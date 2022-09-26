import React from 'react'
import drop from "../assets/images/shape.png"
import person from "../assets/images/path_2.png"

const Nav = () => {
  return (
    <header id='nav'>
        <nav>
            <span className='first'>SO FUNCTIONIERT</span>
            <span className='sec'>SONDERANGEBOT</span>
            <span className='colored'><img src={drop} className="left" alt="icon"/>MEIN BEREICH<img src={person} className="right" alt="icon"/></span>
        </nav>
    </header>
  )
}

export default Nav
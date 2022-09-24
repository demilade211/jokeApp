import React from 'react'
import search from "../assets/images/search-copy.png"

const Hero = () => {
  return (
    <div id='hero'>
        <h1>The Joke Bible</h1>
        <h2>Daily laughs for you and yours</h2>
        <div className='search-con'>
            <input type='text' placeholder="How can we make you laugh today"/>
            <img src={search} alt="icon"/>
        </div>
    </div>
  )
}

export default Hero
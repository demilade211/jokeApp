import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <Hero/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout
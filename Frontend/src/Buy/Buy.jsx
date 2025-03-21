import React from 'react'
import HomeP from "../pages/HomeP"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Buy = () => {
  return (
    <>
        <Navbar />
        <div className="display flex w-full h-full items-center">
            <HomeP />
        </div>
        <Footer />
    </>
  )
}

export default Buy
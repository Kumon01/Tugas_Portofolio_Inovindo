import React from "react"
import pp from '../assets/pp.jpg'
import { Card } from 'flowbite-react'
import { ReactTyped } from "react-typed";


const Profile = () => {
    return (
    
      <div id="Home" className="flex justify-evenly items-center h-screen">
        <div className="flex flex-col">
          <h1 className="mb-1 text-base font-medium text-yellow-900 dark:text-white">Hallo World, I'm</h1>
          <h5 className="mb-1 text-5xl font-bold text-gray-900 dark:text-white"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            Dynand Ibnukafi Pratama</h5>
          <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <ReactTyped strings={["Junior Programing","Junior Programing"]} typeSpeed={150} /></h5>
          <h5 className="mb-1 text-lg font-medium text-yellow-900 dark:text-white" data-aos="fade-left" data-aos-duration="1800">Wellcome to personal website 👋</h5>
        </div>
          <img
              alt="Bonnie image"
              height="180"
              src={pp}
              width="180"
              className="mb-3 rounded-full shadow-lg flex justify-end"
              data-aos="fade-left"  data-aos-duration="1800"
          />
      </div>
    
    )
}


export default Profile

import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Footer from "../common/footer/Footer"
import Logingheader from "../common/header/Logingheader"


const About = () => {
  return (
    <>
    <Logingheader/>
      <Back title='About Us' />
      <AboutCard />
      <Footer/>
    </>
  )
}

export default About

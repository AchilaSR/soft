import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Logingheader from "../common/header/Logingheader"
import Footer from "../common/footer/Footer"

const Loginghome = () => {
  return (
    <>
    <Logingheader/>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      <Footer/>
    </>
  )
}

export default Loginghome
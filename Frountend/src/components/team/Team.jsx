import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Logingheader from "../common/header/Logingheader"


const Team = () => {
  return (
    <>
    <Logingheader/>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
      <Footer/>
    </>
  )
}

export default Team

import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Logingheader from "../common/header/Logingheader"


const Pricing = () => {
  return (
    <>
    <Logingheader/>
      <Back title='Read while you Free' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
      <Footer/>
    </>
  )
}

export default Pricing

import React from "react"
import { useLocation } from "react-router-dom"

const Backth = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section  className='backth'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1> */}
      </section>
      {/* <div className='margin'></div> */}
    </>
  )
}

export default Backth
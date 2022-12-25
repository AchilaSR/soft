import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>EDUCATRA</h1>
            <span>CLINIC FOR KNOWLEDGE SEEKERS</span>
          </div>

          <div className='social'>
          <a href='https://web.facebook.com/profile.php?id=100088591761373'>
            <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href='https://instagram.com'>
            <i className='fab fa-instagram icon'></i></a>
            <a href='https://twitter.com'>
            <i className='fab fa-twitter icon'></i></a>

            <a href='https://youtube.com'>
            <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head

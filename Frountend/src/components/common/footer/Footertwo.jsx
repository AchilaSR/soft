import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footertwo = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Get updated Connect with your Email to us.</h1>
            <span>Get the best on time</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>EDUCATRA</h1>
            <span>CLINIC FOR KNOWLEDGE SEEKERS</span>
            <p>We all have that little piece of knowledge that we are lacking to get to the exciting bits of all subjects.
              For you we are here to give every piece to solve your puzzle.</p>
            <a href='https://web.facebook.com/profile.php?id=100088591761373'>
            <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href='https://twitter.com'>
            <i className='fab fa-twitter icon'></i>
            </a>
            <a href='https://instagram.com'>
            <i className='fab fa-instagram icon'></i>
            </a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            {/* <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div> */}
            {/* ))} */}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
            <li>
                <i className='fa fa-map'></i>
                <a href="https://www.google.com/maps/place/Faculty+of+Engineering,+University+of+Ruhuna+(%E0%B7%84%E0%B6%B4%E0%B7%94%E0%B6%9C%E0%B6%BD+%E0%B6%89%E0%B6%82%E0%B6%A2%E0%B7%92%E0%B6%B1%E0%B7%9A%E0%B6%BB%E0%B7%94+%E0%B6%B4%E0%B7%93%E0%B6%A8%E0%B6%BA,+%E0%B6%BB%E0%B7%94%E0%B7%84%E0%B7%94%E0%B6%AB%E0%B7%94+%E0%B7%80%E0%B7%92%E0%B7%81%E0%B7%8A%E0%B7%80%E0%B7%80%E0%B7%92%E0%B6%AF%E0%B7%8A%E2%80%8D%E0%B6%BA%E0%B7%8F%E0%B6%BD%E0%B6%BA+)/@6.0793684,80.1919646,15z/data=!4m5!3m4!1s0x0:0x8a7feea89839a01a!8m2!3d6.0793684!4d80.1919646">Faculty of Engineering, University of Ruhuna,Galle </a>
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +94 980 4018
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                educatraforknowledge@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved <i className='fa fa-heart'></i> by Jack Frost EG/2018/3494
        </p>
      </div>
    </>
  )
}

export default Footertwo

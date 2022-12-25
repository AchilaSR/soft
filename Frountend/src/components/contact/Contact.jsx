import React from "react"
import Back from "../common/back/Back"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import "./contact.css"
import Logingheader from "../common/header/Logingheader"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.520630206842!2d80.1919646!3d6.0793684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a7feea89839a01a!2zRmFjdWx0eSBvZiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBSdWh1bmEgKOC3hOC2tOC3lOC2nOC2vSDgtongtoLgtqLgt5LgtrHgt5rgtrvgt5Qg4La04LeT4Lao4La6LCDgtrvgt5Tgt4Tgt5Tgtqvgt5Qg4LeA4LeS4LeB4LeK4LeA4LeA4LeS4Lav4LeK4oCN4La64LeP4La94La6ICk!5e0!3m2!1sen!2slk!4v1671601854728!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
    <Logingheader/>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <a href='https://www.google.com/maps/place/Faculty+of+Engineering,+University+of+Ruhuna+(%E0%B7%84%E0%B6%B4%E0%B7%94%E0%B6%9C%E0%B6%BD+%E0%B6%89%E0%B6%82%E0%B6%A2%E0%B7%92%E0%B6%B1%E0%B7%9A%E0%B6%BB%E0%B7%94+%E0%B6%B4%E0%B7%93%E0%B6%A8%E0%B6%BA,+%E0%B6%BB%E0%B7%94%E0%B7%84%E0%B7%94%E0%B6%AB%E0%B7%94+%E0%B7%80%E0%B7%92%E0%B7%81%E0%B7%8A%E0%B7%80%E0%B7%80%E0%B7%92%E0%B6%AF%E0%B7%8A%E2%80%8D%E0%B6%BA%E0%B7%8F%E0%B6%BD%E0%B6%BA+)/@6.0793684,80.1919646,15z/data=!4m5!3m4!1s0x0:0x8a7feea89839a01a!8m2!3d6.0793684!4d80.1919646'>Faculty of Engineering, University of Ruhuna,Galle </a>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> educatraforknowledge@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +9478 980 4018</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact

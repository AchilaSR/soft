import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useHistory, useParams} from "react-router-dom"

function Hero ()  {

  let history = useHistory();

  const SignIn = async (event) => {
    console.log("jfoweHF");
    history.push("/signin_register") 
    window.location.reload();

  }



  return (    <>
    <section className='hero'>
      <div className='container'>
        <div className='row'>
          <Heading subtitle='WELCOME TO EDUCATRA...' title='CLINIC FOR KNOWLEDGE SEEKERS' />
          <p>We all have that little piece of knowledge that we are lacking to get to the exciting bits of all subjects.
            For you we are here to give every piece to solve your puzzle.
          </p>
          <div className='button'>
          

          </div>
        </div>
      </div>
    </section>
    <div className='margin'></div>
  </>
  )
}

export default Hero

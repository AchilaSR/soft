import React, { useState } from "react"
import { Link,NavLink } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useHistory } from "react-router-dom";




const Header = () => {
  const [click, setClick] = useState(false)

  let history = useHistory();

  const st = sessionStorage.getItem("st")
  

  const home = () => {
    if(st == null){
        history.push("/signin");
        window.location.reload();
    }else{
        history.push("/");
        window.location.reload();
      }};

  const courses = () => {
      if(st == null){
        history.push("/signin");
        window.location.reload();
    }else{
      history.push("/courses");
      window.location.reload();
    }};

  const team = () => {
      if(st == null){
        history.push("/signin");
        window.location.reload();
    }else{
      history.push("/team");
      window.location.reload();
    }};
  const about = () => {
    if(st == null){
      history.push("/signin");
      window.location.reload();
  }else{
    history.push("/about");
    window.location.reload();
  }};

  const pricing = () => {
    if(st == null){
      history.push("/signin");
      window.location.reload();
  }else{
    history.push("/pricing");
    window.location.reload();
  }};

  const journal = () => {
    if(st == null){
      history.push("/signin");
      window.location.reload();
  }else{
    history.push("/journal");
    window.location.reload();
  }};

  const contact = () => {
    if(st == null){
      history.push("/signin");
      window.location.reload();
  }else{
    history.push("/contact");
    window.location.reload();
  }};
  
  const signin = async (event) => {
    console.log("jfoweHF");
    history.push("/signin") 
    window.location.reload();

  }
  const teacherloging = async (event) => {
    console.log("jfoweHF");
    history.push("/tearcherlogin") 
    window.location.reload();

  }





  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' onClick={home}>Home</Link>
            </li>
            <li>
              <Link to='/courses' onClick={courses}>All Courses</Link>
            </li>
            <li>
              <Link to='/about' onClick={about}>About</Link>
            </li>
            <li>
              <Link to="/team" onClick={team}>Teacher</Link>
            </li>
            <li>
              <Link to='/pricing' onClick={pricing}>Programs</Link>
            </li>
            <li>
              <Link to='/journal' onClick={journal}>Blog-Posts</Link>
            </li>
            <li>
              <Link to='/contact' onClick={contact}>Contact</Link>
            </li>
            <li>
              <Link to='/contact' onClick={signin}>Login</Link>
            </li>
            <li>
              <Link to='/contact' onClick={teacherloging}>Teacher Loging</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET YOUR SKILLS</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header

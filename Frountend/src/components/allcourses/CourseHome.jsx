import React from "react"
import Back from "../common/back/Back"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Logingheader from "../common/header/Logingheader"


const CourseHome = () => {
  return (
    <>
    <Logingheader/>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
      <Footer/>
    </>
  )
}

export default CourseHome

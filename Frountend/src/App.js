import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Studentchat from "./vidiomeetng/Studentchat"
import Teacherchat from "./vidiomeetng/Teacherchat"
import Vidiomeeting from "./vidiomeetng/Vidiomeeting"
import Signin from "./components/signin_register/Signin"
import Register from "./components/signin_register/Register"
import Loginghome from "./components/home/Loginghome"
import Profile_student from "./components/Profile_student"
import Teacherlogin from "./components/signin_register/Teacherlogin"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Loginghome' component={Loginghome} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/studentchat/:id' component={Studentchat} />
          <Route exact path='/teacherchat/:id' component={Teacherchat} />
          <Route exact path='/vidiomeeting' component={Vidiomeeting} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile_student} />
          <Route exact path='/tearcherlogin' component={Teacherlogin} />
        </Switch> 
      </Router>
    </>
  )
}

export default App

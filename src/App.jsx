// import { useState } from 'react'
import NavBar from "./component/navbar/navbar"
import Herooo from "./component/herooo/herooo"
import Programs from "./component/programs/programs"
import Services from "./component/services/services"
import Learning from "./component/Learning/learning"
import Aboutus from "./component/aboutus/aboutus"
import Saftey from "./component/saftey/saftey"
import Contact from "./component/contactus/contactus"
import Testimonials from "./component/testimonials/testimonials"
import Footer from "./component/footer/footer"
import MobileIcon from "./component/mobileicon/mobileicon"


function App() {

  return (
    <>
      <NavBar />
      <Herooo id="home" />
      <Programs />
      <Services id="services" />
      <Learning />
      <Aboutus id="about" />
      <Saftey />
      <Contact id="contact" />
      <Testimonials />
      <Footer />
      <MobileIcon/>
    </>
  )
}

export default App




import Header from "./Components/Header"
import Home from "./Components/Home";
import Project from "./Components/Project";
import Services from "./Components/Services";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";

import { Toaster } from "react-hot-toast"

import "./Style/app.scss"
import "./Style/header.scss"
import "./Style/home.scss"
import "./Style/about.scss"
import "./Style/project.scss"
import "./Style/timeline.scss"
import "./Style/services.scss"
import "./Style/conatct.scss"
import "./Style/footer.scss"
import { useState} from "react";
import PhoneNav from "./Components/PhoneNav";





function App() {

  const [openMenu, setOpenMenu] = useState(false);

  return   (
    <>
      <PhoneNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Home />
      <About />
      <Project />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>

  )
}

export default App;

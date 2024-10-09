import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Navbar1 from "./Components/Navbar/Navbar1"
import Projects from "./Components/Projects/Projects"

function App() {
return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        {/* <Navbar/> */}
        <Navbar1/>
        <Home/>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App

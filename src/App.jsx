import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import Home from "../pages/Home"
import About from "../pages/About"
import Footer from "../components/Footer"

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route/>
        </Routes>
      
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App

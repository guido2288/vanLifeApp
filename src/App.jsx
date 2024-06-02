import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans/Vans"
import "./server"
import VanDetail from "../pages/Vans/VanDetail"
import Layout from "../components/Layout"
import Income from "../pages/Host/Income"
import Reviews from "../pages/Host/Reviews"
import HostLayout from "../components/HostLayout"
import Dashboard from "../pages/Host/Dashboard"
import HostVans from "../pages/Host/HostVans"
import HostVansDetails from "../pages/Host/HostVansDetails"
import HostVanInfo from "../pages/Host/HostVanInfo"
import HostVanPhotos from "../pages/Host/HostVanPhotos"
import HostVanPricing from "../pages/Host/HostVanPricing"

function App() {


  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Home /> }/>
            <Route path="about" element={ <About /> }/>
            <Route path="vans" element={ <Vans /> }/>
            <Route path="vans/:id" element={ <VanDetail /> }/>

            <Route path="host" element={ <HostLayout /> }>
            | <Route index element={ <Dashboard /> }/>
  |           <Route path="income" element={ <Income /> }/>
  |           <Route path="vans" element={ <HostVans /> }/>
              <Route path="reviews" element={ <Reviews /> }/>
  |           <Route path="vans/:id" element={ <HostVansDetails /> }>
                <Route index  element={ <HostVanInfo /> }/>
                <Route path="pricing" element={ <HostVanPricing /> }/>
                <Route path="photos" element={ <HostVanPhotos /> }/>
              </Route>
              
            </Route>

          </Route>
        </Routes>
      

      </BrowserRouter>
      
    </>
  )
}

export default App

import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {

  const {currentVan} = useOutletContext();

  return (
    <div className="hostVanPricing">
      <p>${currentVan.price}/<span>day</span></p>
    </div>
  )
}

export default HostVanPricing
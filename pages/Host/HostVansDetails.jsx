import { Link, Outlet, useParams  } from "react-router-dom"
import DetailsLayout from "../../components/DetailsLayout"
import { useEffect, useState } from "react"


export const HostVansDetails = () => {
  const params = useParams();

  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res=> res.json())
    .then(data => setCurrentVan(data.vans))   
  }, [])

  return (
    <div className="hostVanDetail-section">
      <Link to=".." relative="path">
        <p>
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z" fill="#858585"/>
          </svg>
          Back to all vans
        </p>
      
      </Link>

      <div className="hostVanDetail-container">

        {
          currentVan ? (
            <div className="hostVanDetail-header">
            <img src={currentVan.imageUrl} alt={currentVan.name} />
            <div className="hostVanDetail-text">
              <i className={currentVan.type}>{currentVan.type}</i>
              <h3>{currentVan.name}</h3>
              <p>${currentVan.price}/<span>day</span></p>
            </div>
  
          </div>
          ) : (
            <h2>Loading...</h2>
          )
        }
     
        <DetailsLayout />
        
        <Outlet context={{currentVan}} />

      </div>


    </div>
  )
}

export default HostVansDetails
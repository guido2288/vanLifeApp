import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const HostVans = () => {

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans( prev => data.vans.filter(element => element.hostId === "123") ))
  }, [])

  const vansElement = vans.map( van => (
    <Link to={`/host/vans/${van.id}`} style={{color:"transparent"}} key={van.id}>
        <div className="hostVans-card">
            <img src={van.imageUrl} alt={van.name} />
            <div>
              <h3>{van.name}</h3>
              <span>${van.price}/day</span>
            </div>
        </div>

    </Link>
  ) )

  return (
    <div className="hostVans-container">
      <h2>Your listed vans</h2>
      <div className="hostVans-cardContainer">

        {
          vans.length > 0 ? (
            <>
              {vansElement}
            </>
          ) : (
            <h2>Loading...</h2>
          )
        }

      </div>
    </div>
  )
}

export default HostVans
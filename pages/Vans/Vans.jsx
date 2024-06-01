import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Vans = () => {

  const [vans, setVans] = useState([])

  useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])
  
  const vansElement = vans.map( van => (
    <Link to={`/vans/${van.id}`} style={{color:"transparent"}} key={van.id}>
      <div className="card" >
        <img src={van.imageUrl} alt={van.name} />
        <div className="card-text">
          <h4>{van.name}</h4>
          <p>${van.price}<span>/day</span></p>

        </div>
        <button className={van.type}>{van.type}</button>
      </div>
    
    </Link>
  ))

  return (
    <div className="vans-container">
      <h3>Explore our van options</h3>
      <div className="filters-container">
        <button>Simple</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <button>Clear filters</button>
      </div>

      <div className="cards-container">
        {vansElement}
      </div>

    </div>
  )
}

export default Vans
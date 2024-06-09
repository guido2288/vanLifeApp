import { useEffect, useState } from "react"
import { Link,  useSearchParams } from "react-router-dom"
import { getVans } from "../../src/api";


const Vans = () => {

  const [vans, setVans] = useState([]);

  const  [ searchParams , setSearchParams] = useSearchParams()

  const [loading, setLoading] = useState(false);

  const typeFilter = searchParams.get("type")

  
  useEffect(() => {
    async function loadVans() {
      setLoading(true)

      try {
        const data = await getVans()
        setVans(data)
        
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }
  
    loadVans()
  }, [])

  const filtersVans = typeFilter 
    ? vans.filter( van => van.type === typeFilter.toLowerCase() )
    : vans
  
  const vansElement = filtersVans.map( van => (
    <Link to={van.id} style={{color:"transparent"}} key={van.id}>
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
        <button className={typeFilter == "simple" && "selected"} onClick={() => setSearchParams({type: "simple"})}>Simple</button>
        <button className={typeFilter == "luxury" && "selected"} onClick={() => setSearchParams({type: "luxury"})} >Luxury</button>
        <button className={typeFilter == "rugged" && "selected"} onClick={() => setSearchParams({type: "rugged"})} >Rugged</button>
        { typeFilter ? <button className="clearBtn" onClick={() => setSearchParams({})} >Clear filters</button> : null }
        
                        
      </div>

      <div className="cards-container">
        {
          loading ? <h2>Loading...</h2> : vansElement
        }
        
      </div>

    </div>
  )
}

export default Vans
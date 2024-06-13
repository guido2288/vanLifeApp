import { useEffect, useState } from "react"
import { getHostVans } from "../../src/api"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"

const Dashboard = () => {

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getHostVans()
      .then(data => setVans(data))
      .catch(err => setError(err))
      .finally( () => setLoading(false))
  
  }, [])

  function renderVanElements(vans) {
    const hostVansEls = vans.map( (van) => (
      <>
      <div key={van.id} className="hostVans-card">
          <img src={van.imageUrl} alt={van.name} />
          <div>
            <h3>{van.name}</h3>
            <span>${van.price}/day</span>
          </div>
      </div>

  </>
    ) )

    return (
      <div className="host-vans-list">
          <section>{hostVansEls}</section>
      </div>
    )

  }
  
  if(error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <section className="host-dashboard-earnings">
          <div className="info">
              <h1>Welcome!</h1>

                <p>Income last <span>30 days</span></p>
                <h2>$2,260</h2>

          </div>
          <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
          <h2>Review score</h2>

          <BsStarFill className="star" />

          <p>
              <span>5.0</span>/5
          </p>
          <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
          <div className="top">
              <h2>Your listed vans</h2>
              <Link to="vans">View all</Link>
          </div>
          {
              loading && !vans
              ? <h1>Loading...</h1>
              : (
                  <>
                      {renderVanElements(vans)}
                  </>
              )
          }
          {/*<React.Suspense fallback={<h3>Loading...</h3>}>
              <Await resolve={loaderData.vans}>{renderVanElements}</Await>
          </React.Suspense>*/}
      </section>
    </>
  )
}

export default Dashboard
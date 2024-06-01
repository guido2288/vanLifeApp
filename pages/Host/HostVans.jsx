const HostVans = () => {
  return (
    <div className="hostVans-container">
      <h2>Your listed vans</h2>
      <div className="hostVans-cardContainer">


        <div className="hostVans-card">
            <img src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png" alt="" />
            <div>
              <h3>Modest Explorer</h3>
              <span>$60/day</span>
            </div>
        </div>

        <div className="hostVans-card">
            <img src="https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png" alt="" />
            <div>
              <h3>Modest Explorer</h3>
              <span>$60/day</span>
            </div>
        </div>
        

      </div>


    </div>
  )
}

export default HostVans
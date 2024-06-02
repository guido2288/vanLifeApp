import { NavLink } from "react-router-dom"


const DetailsLayout = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <>
      <nav className="datails-links">
          <NavLink end style={({ isActive }) => isActive ? activeStyles : null} to=".">Details</NavLink>
          <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
          <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="photos">Photos</NavLink>
      </nav>

      
    </>
  )
}

export default DetailsLayout
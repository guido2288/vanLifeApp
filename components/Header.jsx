import { NavLink , Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <Link to="/" className="site-logo">#VANLIFE</Link>
        
        <div className="links-container">

            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/host">Host</NavLink>
            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/about">About</NavLink>
            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/vans">Vans</NavLink> 
        </div>
    </header>
  )
}

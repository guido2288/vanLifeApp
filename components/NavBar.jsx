import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
        <Link to="/" className="site-logo">#VANLIFE</Link>
        
        <div className="links-container">
            <Link to="/about">About</Link>
            <Link to="/">Vans</Link> 
        </div>
    </nav>
  )
}

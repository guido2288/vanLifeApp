import { NavLink , Link } from "react-router-dom"

const IconLogin = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.12104 15.8047C5.15267 14.6564 7.4998 14.001 10 14.001C12.5002 14.001 14.8473 14.6564 16.879 15.8047M13 8.00098C13 9.65783 11.6569 11.001 10 11.001C8.34315 11.001 7 9.65783 7 8.00098C7 6.34412 8.34315 5.00098 10 5.00098C11.6569 5.00098 13 6.34412 13 8.00098ZM19 10.001C19 14.9715 14.9706 19.001 10 19.001C5.02944 19.001 1 14.9715 1 10.001C1 5.03041 5.02944 1.00098 10 1.00098C14.9706 1.00098 19 5.03041 19 10.001Z" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export const Header = () => {

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  } 

  return (
    <header>
        <Link to="/" className="site-logo">#VANLIFE</Link>
        
        <div className="links-container">

            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/host">Host</NavLink>
            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/about">About</NavLink>
            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/vans">Vans</NavLink> 
            <NavLink isActive={ ({isActive}) => { isActive ? className="active" : null } } to="/login">{IconLogin}</NavLink> 
            <button onClick={fakeLogOut}>X</button>
        </div>
    </header>
  )
}

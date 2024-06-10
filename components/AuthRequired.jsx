import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {

  const loggedin = localStorage.getItem("loggedin");
  const location = useLocation()

  if(!loggedin){
    return <Navigate 
      to="/login" 
      state={{
        message: "You must log in first",
        from: location.pathname
      
      }}
      replace
      />
  }

  return <Outlet />
}

export default AuthRequired
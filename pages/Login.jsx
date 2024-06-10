import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../src/api";

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/host";

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from , {replace: true})
            })
            .catch( err => {
                setError(err)
            } )
            .finally(() => {
                setStatus("idle")
        })

    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {
                (location.state && !error?.message) && <p className="errorMessage">{location.state.message}</p> 
            }
            
            {
                error?.message && 
                <p className="errorMessage">{error.message}</p>
            }

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    className={status === "submitting" ? "disabledButton" : "" }
                    disabled={status === "submitting"} 
                    >
                        {status === "submitting" 
                            ? "Logging in..." 
                            : "Log in"
                        }
                    </button>
            </form>

            <p>Don’t have an account? <span> Create one now </span></p>
        </div>
  )
}

export default Login
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2"

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (event) => {
        event.preventDefault()
        
        try {
            await axios.post('https://api.p2.slc1.foxhub.space/register', {
                email,
                password
            })

            navigate('/login')
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

  return (
    <>
      <div
        className="d-flex"
        style={{
          height: "100vh",
        }}
      >
        <div className="left-side" style={{ flex: 1 }}></div>
        <div
          className="right-side d-flex justify-content-center align-items-center p-5"
          style={{ flex: 1, backgroundColor: "#FCDCA0", height: "100%" }}
        >
          <form className="w-50" onSubmit={handleRegister}>
            <h1 className="m-5">Hacktiv Grocery</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-warning w-100">
              Register
            </button>
            <div className="text-center m-5">
              Do you have an account?{'   '}
              <Link to={"/login"}>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

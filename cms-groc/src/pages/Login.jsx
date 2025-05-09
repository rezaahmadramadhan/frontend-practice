import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "https://api.p2.slc1.foxhub.space/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div
        className="d-flex"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="left-side d-flex justify-content-center align-items-center"
          style={{ flex: 1 }}
        >
          <img
            src="https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVwXgEvxlE5fKNE0OwlpDh-7Df3kUiRk1e77H48tnT2HpKgxkEm9EX2weZRatVjAm8SV04ve7cyO6dJnBd_c3UOsh4zVnULS09KD.jpg?r=4d8"
            style={{
              width: "25%",
              height: "25%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />

          <button className="btn btn-warning">Join</button>
        </div>
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
              Login
            </button>
            <div className="text-center m-5">
              Don't have an account yet?{"   "}
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

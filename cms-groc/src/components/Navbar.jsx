import Swal from "sweetalert2";

export default function Navbar({ navigate }) {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    Swal.fire({
      title: `You've been logged out!`,
      text: "Please login again!",
      icon: "error",
      confirmButtonText: "OK",
    });
    navigate('/login')
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#FCDCA0" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Hacktiv Grocery</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => navigate("/add-grocery")}
                >
                  Add
                </button>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

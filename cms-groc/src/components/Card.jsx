import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Card({ grocery, fetchGroceries }) {
  const navigate = useNavigate()

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.p2.slc1.foxhub.space/groceries/${grocery.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          },
        }
      );

      Swal.fire({
        title: "Deleted successfully!",
        text: `Grocery ID ${grocery.id} deleted`,
        icon: "success",
        confirmButtonText: "OK",
      });
      
      fetchGroceries()
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
      <div className="card" style={{ width: "20rem" }}>
        <img
          src={grocery.imageUrl}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{grocery.title}</h5>
          <p className="card-text">{rupiah(grocery.price)}</p>
          <h5>
            <span className="badge text-bg-secondary mb-3">{grocery.tag}</span>
          </h5>
          <button className="btn btn-warning w-100 my-2" onClick={() => navigate(`/update-grocery/${grocery.id}`)}>
            Update
          </button>
          <button className="btn btn-danger w-100" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

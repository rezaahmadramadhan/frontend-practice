import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Form from "../components/Form";

export default function Edit() {
  const { id } = useParams();
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  async function fetchGroceryById() {
    try {
      const { data } = await axios.get(
        `https://api.p2.slc1.foxhub.space/groceries/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setFormData(data);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  useEffect(() => {
    fetchGroceryById();
  }, []);

  const handleEdit = async (event) => {
    try {
      event.preventDefault();
      await axios.put(
        `https://api.p2.slc1.foxhub.space/groceries/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

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
        className="container w-50 mt-5"
        style={{
          backgroundColor: "#FCDCA0",
          minHeight: "400px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Grocery</h2>

        <Form
          buttonName={"Update"}
          onSubmit={handleEdit}
          formData={formData}
          setFormData={setFormData}
          navigate={navigate}
        />
      </div>
    </>
  );
}

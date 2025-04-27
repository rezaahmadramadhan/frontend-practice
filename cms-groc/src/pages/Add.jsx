import Swal from "sweetalert2";
import Form from "../components/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Add() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    tag: "",
    imageUrl:""
  })
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(
        "https://api.p2.slc1.foxhub.space/groceries",
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
          buttonName={"Submit"}
          onSubmit={handleSubmit}
          navigate={navigate}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </>
  );
}

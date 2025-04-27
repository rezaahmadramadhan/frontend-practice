import { useState } from "react";

export default function Form({
  buttonName,
  onSubmit,
  navigate,
  formData,
  setFormData,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            name="tag"
            value={formData.tag || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={formData.imageUrl || ""}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center gap-4">
          <button
            type="button"
            className="btn btn-secondary w-25"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button type="submit" className="btn btn-warning w-25">
            {buttonName}
          </button>
        </div>
      </form>
    </>
  );
}

import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Swal from "sweetalert2";

export default function HomePage() {
  const [groceries, setGroceries] = useState([]);

  async function fetchGroceries() {
    try {
      const { data } = await axios.get(
        "https://api.p2.slc1.foxhub.space/groceries",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setGroceries(data);
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
    fetchGroceries();
  }, []);
  return (
    <>
      <div className="d-flex gap-3 justify-content-center mt-5 flex-wrap">
        {groceries.map((grocery) => (
            <div key={grocery.id}>
              <Card grocery={grocery} fetchGroceries={fetchGroceries}/>
            </div>
        ))}
      </div>
    </>
  );
}

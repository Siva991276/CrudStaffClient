import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../AddData/addData.css";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState({
    EmpName: "",
    EmpEmail: "",
    EmpPassword: "",
    EmpPho: "",
    EmpAdd: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/Staff/GetSingleData/${id}`
        );
        setStaffData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({ ...staffData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:3200/Staff/UpdateStaffData/${id}`, staffData)
        .then((response) => {
          toast.success(response.data.message, { position: "top-center" });
          navigate("/");
        });
    } catch (error) {
      console.error("Error updating staff data:", error);
    }
  };

  return (
    <div className="Formcontroller">
      <center>
        <h1> Update Staff Data</h1>
      </center>
      <Link to="/">
        <button className="backsecionbtn">Back</button>
      </Link>
      <div>
        <form onSubmit={postData}>
          <div className="formSection">
            <label>Name</label>
            <input
              type="text"
              name="EmpName"
              value={staffData.EmpName}
              onChange={handleChange}
            />
          </div>
          <div className="formSection">
            <label>Email</label>
            <input
              type="email"
              name="EmpEmail"
              value={staffData.EmpEmail}
              onChange={handleChange}
            />
          </div>
          <div className="formSection">
            <label>Password</label>
            <input
              type="text"
              name="EmpPassword"
              value={staffData.EmpPassword}
              onChange={handleChange}
            />
          </div>
          <div className="formSection">
            <label>Phone_No</label>
            <input
              type="text"
              name="EmpPho"
              value={staffData.EmpPho}
              onChange={handleChange}
            />
          </div>
          <div className="formSection">
            <label>Address</label>
            <input
              type="text"
              name="EmpAdd"
              value={staffData.EmpAdd}
              onChange={handleChange}
            />
          </div>
          <div className="formSection">
            <button type="submit" className="addbutton">
              Update Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;

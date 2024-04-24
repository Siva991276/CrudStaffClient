import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./addData.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddData = () => {
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState({
    EmpName: "",
    EmpEmail: "",
    EmpPassword: "",
    EmpPho: "",
    EmpAdd: "",
  });
  const ChangeInputs = (e) => {
    const { name, value } = e.target;
    setStaffData({ ...staffData, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3200/Staff/AddStaff", staffData)
      .then((response) => {
        toast.success(response.data.message, { position: "top-center" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Formcontroller">
      <center>
        <h1> Add Staff Data</h1>
      </center>
      <Link to="/">
        <button className="backsecionbtn">Back</button>
      </Link>
      <div>
        <form onSubmit={PostData}>
          <div className="formSection">
            <label>Name</label>
            <input type="text" name="EmpName" onChange={ChangeInputs} />
          </div>
          <div className="formSection">
            <label>Email</label>
            <input type="email" name="EmpEmail" onChange={ChangeInputs} />
          </div>
          <div className="formSection">
            <label>Password</label>
            <input type="password" name="EmpPassword" onChange={ChangeInputs} />
          </div>
          <div className="formSection">
            <label>Phone_No</label>
            <input type="text" name="EmpPho" onChange={ChangeInputs} />
          </div>
          <div className="formSection">
            <label>Address</label>
            <input type="text" name="EmpAdd" onChange={ChangeInputs} />
          </div>
          <div className="formSection">
            <button type="submit" className="addbutton">
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;

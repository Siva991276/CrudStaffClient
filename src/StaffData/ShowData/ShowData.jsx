import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShowData.css";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const ShowData = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:3200/Staff/GetStaffData"
      );
      setStaff(response.data.data);
    };
    getData();
  }, []);
  console.log(staff);

  const deleteStaff = async (staffid) => {
    await axios
      .delete(`http://localhost:3200/Staff/deleteStaff/${staffid}`)
      .then((response) => {
        setStaff((preview) => preview.filter((item) => item._id !== staffid));
        toast.success(response.data.message, { position: "top-center" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="StaffSection">
        <center>
          <h1>Staff Data</h1>
        </center>

        <Link to="/add" className="BackButton">
          Back
        </Link>
        <div className="StaffTable">
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone_No</th>
              <th>City</th>
              <th>Action</th>
            </thead>
            <tbody>
              {staff.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.EmpName}</td>
                    <td>{item.EmpEmail}</td>
                    <td>{item.EmpPho}</td>
                    <td>{item.EmpAdd}</td>
                    <td>
                      <button
                        className="deleteButton"
                        onClick={() => deleteStaff(item._id)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                      <Link to={`/edit/${item._id}`}>
                        <button className="updateButton">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowData;

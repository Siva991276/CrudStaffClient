import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowData from "./StaffData/ShowData/ShowData";
import AddData from "./StaffData/AddData/addData";
import UpdateData from "./StaffData/UpdateData/UpdateData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShowData />,
    },
    {
      path: "/Add",
      element: <AddData />,
    },
    {
      path: "/Edit/:id",
      element: <UpdateData />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

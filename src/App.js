import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, EmployeeForm, EmployeeList } from "./components";

export const App = () => {

  const getData = () => {
    const data = localStorage.getItem('employees');

    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList getData={getData} />} />
          <Route path="/create-employee" element={<EmployeeForm getData={getData} />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm getData={getData} />} />
        </Routes>
      </div>
    </div>
  )
}


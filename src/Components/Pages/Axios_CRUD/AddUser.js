import React from "react";
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const { firstname, lastname } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    navigate("/");
    setUser({ firstname: "", lastname: "" });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter FirstName"
                name="firstname"
                value={firstname}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="EnterLastName"
                name="lastname"
                value={lastname}
                onChange={onInputChange}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              ADD
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

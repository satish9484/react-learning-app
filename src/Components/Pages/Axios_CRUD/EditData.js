import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditData() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const { firstname, lastname } = user;

  useEffect(() => {
    const loadUserData = async () => {
      const { data: response } = await axios.get(
        `http://localhost:3000/users/${id}`
      );
      setUser(response);
    };
    loadUserData();
  }, [id]);

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Change Info </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter LastName"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-primary btn-block">Save Change</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import NavigationBar from "./NavigationBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loaduserdata();
  }, []);

  const loaduserdata = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loaduserdata();
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div>
        <div className="grid gap-5 md:grid-cols-2">
          {users.length ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>
                      <div>
                        <Link
                          className="btn btn-secondary mr-2"
                          to={`/users/${user.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-info mr-2"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center col-span-2 text-gray-700 font-semibold">
              No User Found
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Navbar
          </a>
          <form className="d-flex" role="search">
              <a className="btn btn-outline-success" href="/adduser">AddUser</a>
          </form>
        </div>
      </nav>
    </div>
  );
}

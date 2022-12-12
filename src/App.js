
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Components/Pages/Axios_CRUD/Home";
// import AddUser from "./Components/Pages/Axios_CRUD/AddUser";
// import PageNotFound from "./Components/Pages/Axios_CRUD/PageNotFound.js";
// import Editdata from "./Components/Pages/Axios_CRUD/EditData";  


import ExtraLeraingFile from "./ExtraLeraingFile";


//import Form from "./Components/Pages/Hook_Reducer/Form";

// import AddUser from "./Components/Pages/Redux_CRUD/AddUser";
// import EditUser from "./Components/Pages/Redux_CRUD/EditUser";
// import UserList from "./Components/Pages/Redux_CRUD/UserList";

function App() {
  return (
    <React.Fragment>
      <ExtraLeraingFile />

      {/* Hook Reducer
      
      <Form/> */}

      {/* Axios CRUD Opration */}

      {/* <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/users/:id" element={<Editdata />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router> */}

      {/* <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">

          CRUD with redux toolkit

        </h1>
        <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </div> */}
    </React.Fragment>
  );
}

export default App;

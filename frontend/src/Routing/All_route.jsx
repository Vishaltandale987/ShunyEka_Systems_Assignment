import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../page/Home";
import Add_User from "../page/Add_User";
import EditForm from "../From/EditFrom";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/add_User" element={<Add_User />}></Route>
        <Route path="/edit" element={<EditForm />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;
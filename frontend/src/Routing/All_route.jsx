import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../page/Home";
import Add_User from "../page/Add_User";
import EditForm from "../From/EditFrom";
import SingleUser from "../page/SingleUser";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/add_User" element={<Add_User />}></Route>
        <Route path="/edit" element={<EditForm />}></Route>
        <Route path="/view" element={<SingleUser />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;
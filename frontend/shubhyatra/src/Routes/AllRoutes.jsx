import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginSignup/Login";
import Signup from "../Components/LoginSignup/Signup";
import Buses from "../Pages/Buses";
import HomePage from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import PrivateRoute from "./Private.routes";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/buses"
          element={
            <PrivateRoute>
              <Buses />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

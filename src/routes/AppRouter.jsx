import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default AppRouter;

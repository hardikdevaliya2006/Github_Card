import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Card from "../components/Card";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/User/:user" element={<Card/>}></Route>
    </Routes>
  );
};

export default AppRouter;

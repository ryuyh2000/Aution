import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Autioneer from "./Autioneer";
import Bidder from "./Bidder";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autioneer" element={<Autioneer />} />
      <Route path="/bidder" element={<Bidder />} />
    </Routes>
  );
};

export default Router;

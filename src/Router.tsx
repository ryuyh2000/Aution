import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Bidder from "./Page/Bidder";
import Cosigner from "./Page/Cosigner ";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bidder" element={<Bidder />} />
      <Route path="/cosigner" element={<Cosigner />} />
    </Routes>
  );
};

export default Router;

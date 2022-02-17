import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Bidder from "./Page/Bidder";
import Cosigner from "./Page/Cosigner ";
import Login from "./Page/Login";
import Header from "./Components/Header";

interface Authentication {
  inLoggedIn: any;
}

const Router: React.FC<Authentication> = ({ inLoggedIn }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={inLoggedIn ? <Home /> : <Login />} />
        <Route path="/bidder" element={<Bidder />} />
        <Route path="/cosigner" element={<Cosigner />} />
      </Routes>
    </>
  );
};

export default Router;

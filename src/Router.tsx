import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import BidderDisplay from "./Page/BidderDisplay";
import Cosigner from "./Page/Cosigner ";
import Login from "./Page/Login";
import Header from "./Components/Header";
import Auction from "./Page/Auction";

interface Authentication {
  inLoggedIn: any;
}

const Router: React.FC<Authentication> = ({ inLoggedIn }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={inLoggedIn ? <Home /> : <Login />} />
        <Route path="/bidderDisplay" element={<BidderDisplay />} />
        <Route path="/cosigner" element={<Cosigner />} />
        <Route path="/auction/:pictureID" element={<Auction />} />
      </Routes>
    </>
  );
};

export default Router;

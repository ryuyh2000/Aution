import React from "react";
import { Link } from "react-router-dom";
import Slide from "../Components/Slide";


function Home() {


  return (
    <>
      <div>Home</div>
      <Slide />
      <Link to="/cosigner">cosigner</Link>
      <br />
      <Link to="/bidder">bidder</Link>
      
    </>
  );
}
export default Home;

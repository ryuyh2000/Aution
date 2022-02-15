import React from "react";
import { Link } from "react-router-dom";
import Slide from "../Components/Slide";
import { authService } from "../Firebase";

function Home() {
  const handleLogOut = () => {
    authService.signOut();
    localStorage.clear();
  };

  return (
    <>
      <div>Home</div>
      <Slide />
      <Link to="/cosigner">cosigner</Link>
      <br />
      <Link to="/bidder">bidder</Link>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}
export default Home;

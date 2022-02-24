import React from "react";
import styled from "styled-components";
import { authService } from "../Firebase";
import { Link } from "react-router-dom";

const Constainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 40px;
  background-color: #6a59ce;
  justify-content: space-around;
  align-items: center;
`;

const LogOut = styled.button`
  margin: 0px;
  padding: 0px;
  background-color: #6a59ce;
  border-style: none;
  color: #f8f85b;
  font-weight: 10px;
  font-size: 20px;
`;

const Menu = styled(Link)`
  text-decoration-line: none;
  color: #f8f85b;
  font-weight: 10px;
  font-size: 20px;
`;

const handleLogOut = () => {
  authService.signOut();
  localStorage.clear();
};

const Header = () => {
  return (
    <Constainer>
      <Menu to="/">Home</Menu>
      <Menu to="/cosigner">Cosigner</Menu>
      <Menu to="/bidderDisplay">Bidder</Menu>
      {authService.currentUser ? (
        <LogOut onClick={handleLogOut}>
          <Menu to="/">Log Out</Menu>
        </LogOut>
      ) : (
        <></>
      )}
    </Constainer>
  );
};

export default Header;

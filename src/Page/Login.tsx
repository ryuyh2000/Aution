import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "../Firebase";
import React from "react";
import styled from "styled-components";
import Slide from "../Components/Slide";

const LoginContainer = styled.div`
  width: 300px;
  background-color: #a0a0ff37;
  height: 100vh;
`;

const Auth = styled.input`
  width: 180px;
  height: 20px;
  margin-bottom: 20px;
`;

const AuthForm = styled.div`
  padding: 250px 0px 0px 50px;
`;

const BtnForm = styled.div`
  padding: 100px 0px 0px 50px;
`;

const Btn = styled.button`
  margin-right: 40px;
`;

const SlideContainer = styled.div`
  width: 80%;
  height: 500px;
  background-color: #7b68ee;
  margin-top: 100px;
`;

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const logIn = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      localStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
    }
  };

  const newAccount = async () => {
    try {
      const data = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <LoginContainer>
        <AuthForm>
          <Auth
            name="email"
            type="text"
            placeholder="Email"
            onChange={onChange}
          />

          <Auth
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
          />
        </AuthForm>

        <BtnForm>
          <Btn onClick={logIn}>Log In</Btn>
          <Btn onClick={newAccount}>New Account</Btn>
        </BtnForm>
      </LoginContainer>

      <SlideContainer>Slide</SlideContainer>
    </div>
  );
};

export default Login;

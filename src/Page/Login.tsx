import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "../Firebase";
import React from "react";

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
    <>
      <div>login</div>
      <input name="email" type="text" placeholder="Email" onChange={onChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChange}
      />
      <br />

      <button onClick={logIn}>Log In</button>
      <button onClick={newAccount}>New Account</button>
      <button>continue with google</button>
    </>
  );
};

export default Login;

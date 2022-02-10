import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "../Firebase";
import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newAccount, setNewAccount] = React.useState(true);

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

  const submit = async () => {
    try {
      if (newAccount) {
          console.log('asdf')
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log(data);
      } else {
        console.log('zxc')
        const data = await signInWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log(data);
      }
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
      <input onClick={submit} type="submit" value="Log In" />
      <button>continue with google</button>
    </>
  );
};

export default Login;

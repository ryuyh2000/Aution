import React from "react";
import Router from "./Router";
import { authService } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [init, setInit] = React.useState(false);
  const [inLoggedIn, setIsLoggdeIn] = React.useState(false);
  React.useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggdeIn(true);
      } else {
        setIsLoggdeIn(false);
      }
      setInit(true);
    });
  });
  return <>{init ? <Router inLoggedIn={inLoggedIn} /> : <div>Loading</div>}</>;
};

export default App;

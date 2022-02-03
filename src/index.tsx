import * as React from "react";
import ReactDom from "react-dom";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector("#root")
);
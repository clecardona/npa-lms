//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Home from "components/Home";
import Login from "components/Login";
import SignUp from "components/Signup";

export default function Logged() {
  return (
    <>
      <Route component={Home} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
    </>
  );
}

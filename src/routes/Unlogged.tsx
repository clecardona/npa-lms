//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "components/Login";
import SignUp from "components/Signup";

export default function Unlogged() {
  return (
    <>
      <Route component={Login} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
    </>
  );
}

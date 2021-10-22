//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Teacher from "components/Teacher";
import Student from "components/Student";
import Login from "components/Login";
import SignUp from "components/Signup";
import Header from "components/shared/Header";

export default function Logged() {
  const isTeacher = true;
  return (
    <>
      <Header />
      <Route exact path="/" component={isTeacher ? Teacher : Student} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
    </>
  );
}

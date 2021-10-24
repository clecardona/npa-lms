//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Teacher from "components/Teacher";
import Student from "components/Student";
import Login from "components/Login";
import SignUp from "components/Signup";
import Header from "components/shared/Header";
import { useAuth } from "state/AuthProvider";

export default function Logged() {
  const { user } = useAuth();
  const isTeacher = user.role === "teacher";
  return (
    <>
      <Header />
      <Route exact path="/" component={isTeacher ? Teacher : Student} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
    </>
  );
}

//@ts-nocheck
import { useAuth } from "state/AuthProvider";
import "./styles/base.sass";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Logged from "routes/Logged";
//import Unlogged from "routes/Unlogged";
import Course from "components/Course";
import Landing from "components/Landing";
import Student from "components/Student";
import Teacher from "components/Teacher";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function App() {
  const { loggedIn } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        {/*  <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch> */}

        {/* route to prepare pages , to be plugged to the login and routing system afterwards */}
        <Header />
        <Switch>
          <Route component={Landing} exact path="/" />
          <Route component={Teacher} exact path="/teacher" />
          <Route component={Student} exact path="/student" />
          <Route component={Course} exact path="/courses/:courseID" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

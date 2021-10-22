//@ts-nocheck
import { useAuth } from "state/AuthProvider";
import "./styles/base.sass";
import { BrowserRouter, Switch } from "react-router-dom";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Footer from "components/shared/Footer";

export default function App() {
  const { loggedIn } = useAuth();
  //const loggedIn = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

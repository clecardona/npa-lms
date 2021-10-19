//@ts-nocheck
import { useAuth } from "state/AuthProvider";
import "./styles/base.sass";
import { BrowserRouter, Switch } from "react-router-dom";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Landing from "components/Landing";

function App() {
  const { loggedIn } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Landing />
        {/* <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

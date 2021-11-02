//@ts-nocheck
//NPM Packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Local Files
import "styles/base.sass";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/fireStore";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Footer from "components/shared/Footer";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  //Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path) => {
      const uid = localStorage.getItem("uid");

      if (uid) {
        const user = await getDocument(path, uid);

        setUser(user);
        setLoggedIn(true);
      }
      setStatus(1);
    },
    [setUser, setLoggedIn]
  );

  useEffect(() => fetchUser("users"), [fetchUser]);

  // Nesting -1
  // Although this is easy to read because is a small enough example, check what is happening.
  // You have a simulated switch statement (status 0, 2, 1) and inside the status 1 (positioned after status 2?) you have
  // a ternary operator for if/else.
  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {status === 1 && (
        <BrowserRouter>
          <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

//NPM Packages
import { NavLink, useHistory } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import logo from "assets/icns/bale-logo.png";
import Toolbar from "components/shared/Toolbar";
import Identificator from "./Identificator";

export default function Header() {
  // Global state
  const { user, setUser, setLoggedIn } = useAuth();
  const history = useHistory();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setLoggedIn(false);
    history.push("/login");
  }

  return (
    <header>
      <nav>
        <NavLink to="/" className="home">
          <img src={logo} alt="Home" />
          <h2>
            Foot<strong>X</strong>
          </h2>
        </NavLink>
        <Identificator username={user.username} role={user.role} />
        <Toolbar onLogout={onLogout} />
      </nav>
    </header>
  );
}

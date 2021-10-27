//NPM Packages
import { NavLink } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import logo from "assets/icns/bale-logo.png";

import Identificator from "./Identificator";

export default function Header() {
  // Global state
  const { user } = useAuth();

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
      </nav>
    </header>
  );
}

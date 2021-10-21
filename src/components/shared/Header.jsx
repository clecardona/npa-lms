import { NavLink } from "react-router-dom";

import logo from "assets/icns/bale-logo.png";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="home">
          <img src={logo} alt="Home" />
          <h1>
            Foot<strong>X</strong>
          </h1>
        </NavLink>
        <div className="burger">
          <Dropdown />
        </div>
      </nav>
    </header>
  );
}

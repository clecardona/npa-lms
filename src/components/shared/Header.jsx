import { NavLink } from "react-router-dom";

import logo from "assets/icns/football/flip.png";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="home">
        <img src={logo} alt="Home" />
        <div className="home-shape" />
      </NavLink>
      <nav></nav>
    </header>
  );
}

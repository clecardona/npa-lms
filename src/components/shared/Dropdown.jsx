import { useState } from "react";
import down from "../../assets/icns/down.png";
import calendar from "assets/icns/calendar.png";
import logout from "assets/icns/logout.png";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "dropdown dropdown-open" : "dropdown"}>
      <div className="buttons">
        <button type="button" className="btn calendar ">
          <img src={calendar} alt="." />
          <h4>See calendar</h4>
        </button>
        <button type="button" className="btn logout">
          <img src={logout} alt="." />
          <h4>Logout</h4>
        </button>
        <button
          type="button"
          className="btn open"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={down} alt="." />
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import down from "../../assets/icns/down.svg";
import burger from "assets/icns/burger.png";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="buttons">
        <button
          type="button"
          className="btn "
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={burger} alt="." />
        </button>
        <button type="button" className="btn btn-main ">
          <img src={down} alt="." />
        </button>
        <button type="button" className="btn btn-main">
          <img src={down} alt="." />
        </button>
      </div>

      {isOpen && (
        <div className="caret">
          <ul>
            <li className="dropdown-item">logout</li>
            <li className="dropdown-item">other action</li>
          </ul>
        </div>
      )}
    </div>
  );
}

//NPM Packages
import { Link } from "react-router-dom";

//Local files
import arrowDown from "assets/icns/arrowDown.png";
import flip from "assets/icns/kickout.png";
import VideoBG from "components/LandingPage/VideoBG";
import Animator from "components/shared/Animator";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <VideoBG />
      <Animator animation="fade-up">
        <div className="bloc">
          <div className="title">
            <h1>
              <strong>Foot</strong>X
            </h1>
            <img src={flip} alt="main" />
          </div>
          <h2>Learn new tricks</h2>
          <p className="description">
            Foot X is a Learning management system platform for Learning
            football skills. Our teacher prepared the best content for you to
            progress in your journey. Join us , it is free.
          </p>
          <Link className="btn btn-main btn-signup" to="/signup">
            <h4>signup</h4>
          </Link>
          <Link className="btn btn-ghost btn-login" to="/login">
            <h4>login</h4>
          </Link>
          <a href="#articles" className="hero-arrow">
            <img src={arrowDown} alt="aaa" />
          </a>
        </div>
      </Animator>
    </div>
  );
}

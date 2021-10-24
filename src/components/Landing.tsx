//@ts-nocheck

import { Link } from "react-router-dom";
import hero from "assets/img/hero.png";
import arrowDown from "assets/icns/arrowDown.png";
import flip from "assets/icns/kickout.png";
import articles from "assets/home/articles.json";

//Components

const Articles = articles.map((item) => {
  const imgPath = require("assets/img/" + item.imageURL);
  const logoPath = require("assets/icns/football/" + item.logoURL);
  return (
    <article key={item.imageURL}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="img-container">
        <img className="illustration" src={imgPath.default} alt="img" />
        <img className="logo" src={logoPath.default} alt="img" />
      </div>
    </article>
  );
});

export default function Landing() {
  return (
    <div className="page-landing">
      <div className="hero" id="hero">
        <img className="bg" src={hero} alt="hero" />
        <a href="#articles" className="hero-arrow">
          <img src={arrowDown} alt="aaa" />
        </a>

        <div className="bloc">
          <div className="title">
            <h1>
              <strong>Foot</strong>X
            </h1>
            <img src={flip} alt="main" />
          </div>
          <h2>Learn new tricks</h2>
          <Link className="btn btn-main btn-signup" to="/signup">
            <h4>signup</h4>
          </Link>
          <Link className="btn btn-ghost btn-login" to="/login">
            <h4>login</h4>
          </Link>
        </div>
      </div>
      <section id="articles">{Articles}</section>
      <a href="#hero" className="up-arrow">
        <img src={arrowDown} alt="aaa" />
      </a>
    </div>
  );
}

//@ts-nocheck

import { Link } from "react-router-dom";
import hero from "assets/img/hero.png";
import arrowDown from "assets/icns/arrowDown.png";
import articles from "assets/home/articles.json";

//Components

const Articles = articles.map((item) => {
  const imgPath = require("assets/img/" + item.imageURL);

  return (
    <>
      <article key={item.title}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="img-container">
          <img src={imgPath.default} alt="img" />
        </div>
      </article>
    </>
  );
});

export default function Landing() {
  return (
    <>
      <div className="hero">
        <img className="bg" src={hero} alt="hero" />
        <img className="hero-arrow" src={arrowDown} alt="aaa" />
        <div className="bloc">
          <h1>
            <strong>Foot</strong>X
          </h1>
          <h2>Learn new tricks</h2>
          <Link className="btn btn-main btn-signup" to="/signup">
            <h4>signup</h4>
          </Link>
          <Link className="btn btn-ghost btn-login" to="/login">
            <h4>login</h4>
          </Link>
        </div>
      </div>
      <section>{Articles}</section>
    </>
  );
}

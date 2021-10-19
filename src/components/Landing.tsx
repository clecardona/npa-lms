//@ts-nocheck

import { Link } from "react-router-dom";
import hero from "assets/img/hero.png";
import articles from "assets/home/articles.json";

//Components

const Articles = articles.map((item) => {
  const imgPath = require("assets/img/" + item.imageURL);

  return (
    <>
      <article key={item.title}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={imgPath.default} alt="img" />
      </article>
    </>
  );
});

export default function Landing() {
  return (
    <>
      <div className="landing">
        <img className="bg" src={hero} alt="hero" />
        <div className="hero">
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
      {Articles}
    </>
  );
}

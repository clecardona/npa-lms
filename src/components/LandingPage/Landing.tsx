//@ts-nocheck
//NPM Packages
import { Link } from "react-router-dom";

//Local files
import arrowDown from "assets/icns/arrowDown.png";
import flip from "assets/icns/kickout.png";
import articles from "assets/home/articles.json";
import VideoBG from "components/LandingPage/VideoBG";
import Hero from "./Hero";

//Components

const Articles = articles.map((item) => {
  const imgPath = require("assets/img/" + item.imageURL);
  const logoPath = require("assets/icns/football/" + item.logoURL);
  return (
    <article key={item.imageURL}>
      <div className="img-container">
        <img className="illustration" src={imgPath.default} alt="img" />
        <img className="logo" src={logoPath.default} alt="img" />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </article>
  );
});

export default function Landing() {
  return (
    <div className="page-landing">
      <Hero />
      <section id="articles">{Articles}</section>
      <a href="#hero" className="up-arrow">
        <img src={arrowDown} alt="aaa" />
      </a>
    </div>
  );
}

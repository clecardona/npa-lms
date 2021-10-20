//@ts-nocheck
import { FC } from "react";

interface MyProps {
  data: object;
}

const Card: FC<MyProps> = ({ data }) => {
  //Components
  const Files = data.files.map((item) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          {item}
        </a>
      </li>
    );
  });
  const Links = data.links.map((item) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          {item}
        </a>
      </li>
    );
  });

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <ul className="files">{Files}</ul>
      <ul className="links">{Links}</ul>
    </div>
  );
};

export default Card;

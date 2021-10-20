//@ts-nocheck
import { FC } from "react";
import { Link } from "react-router-dom";

interface MyProps {
  data: object;
}
const Card: FC<MyProps> = ({ data }) => {
  return (
    <Link to={"/courses/" + data.id} className="card">
      <h2 className="title">{data.title}</h2>
      <p className="description">{data.description}</p>
      <img src={data.imageURL} alt="img" />
      <div className="menu">
        <h3>Edit</h3>
        <h3>Delete</h3>
        <h3>View</h3>
      </div>
    </Link>
  );
};

export default Card;

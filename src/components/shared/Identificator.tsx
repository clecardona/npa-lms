import { FC } from "react";

interface MyProps {
  username: string;
  role: string;
}

const Identificator: FC<MyProps> = ({ username, role }) => {
  return (
    <div className={`role ${role}`}>
      <h3>@{username}</h3>
      <h4>{role}</h4>
    </div>
  );
};

export default Identificator;

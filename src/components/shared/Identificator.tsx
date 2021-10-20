import { FC } from "react";

interface MyProps {
  username: string;
  role: string;
}

const Identificator: FC<MyProps> = ({ username, role }) => {
  return (
    <div className="role">
      <h1>{username}</h1>
      <h2 className="role">{role}</h2>
    </div>
  );
};

export default Identificator;

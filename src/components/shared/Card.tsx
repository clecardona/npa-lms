//@ts-nocheck
//NPM Packages
import { FC, useState } from "react";
import { Link } from "react-router-dom";
//Local imports
import Modal from "components/shared/Modal";
import { deleteDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";

interface MyProps {
  data: object;
}
const Card: FC<MyProps> = ({ data }) => {
  // Global state
  const { user } = useAuth();
  //Local state
  const [isOpen, setIsOpen] = useState(false);

  //Const
  const DEFAULT_IMAGE_URL =
    "https://cdn.dribbble.com/users/2441743/screenshots/15643454/media/0e2498180f43d6bd007b72bc94a3f030.jpg?compress=1&resize=300x200";

  //Methods
  async function handleDelete(event, path, id) {
    event.preventDefault();
    if (window.confirm("Are you sure ?")) {
      await deleteDocument(path, id);
      alert("Course deleted");
    }
  }

  return (
    <div className="card">
      {user.role === "teacher" && (
        <Modal
          type="edit"
          data={data}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          Edit course
        </Modal>
      )}
      <img src={data.imageURL ? data.imageURL : DEFAULT_IMAGE_URL} alt="img" />

      <h2 className="title">{data.title}</h2>
      <p className="description">{data.description}</p>

      <div className="menu">
        {user.role === "teacher" && (
          <>
            <button onClick={() => setIsOpen(true)}>
              <h4>Edit</h4>
            </button>
            <button
              className="btn"
              onClick={(event) => handleDelete(event, "courses", data.id)}
            >
              <h4>Delete</h4>
            </button>
          </>
        )}
        <Link to={"/courses/" + data.id} className="btn btn-orange">
          <h4>View Course</h4>
        </Link>
      </div>
    </div>
  );
};

export default Card;

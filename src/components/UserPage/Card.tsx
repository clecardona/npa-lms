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
  const [isOpen, setIsOpen] = useState(false); // this is why this should be global, there is a repeated isOpen hook somewhere else in the code

  //Const
  // Tip: Default image url are usually static files inside your project. Imagine that the dribbble servers are down and your own app crashes because of it...
  const DEFAULT_IMAGE_URL =
    "https://cdn.dribbble.com/users/1890641/screenshots/5408138/media/b384d198d0631718554f88a93b89f9ae.png?compress=1&resize=1000x750";

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

      {/* Nesting -1 the content inside <></> should be a sub component anf becuase is related to the teacher */}
      {/* Should have a prefix like TeacherForm.jsx or TeacherModalForm.jsx, etc. */}
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

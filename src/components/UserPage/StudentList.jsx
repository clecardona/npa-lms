//Local Files
import useFetch from "hooks/useFetch";
import { useUsers } from "state/UsersProvider";
import { deleteDocument } from "scripts/fireStore";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";
import kickout from "assets/icns/kickout.png";

export default function StudentList() {
  const { dispatchUsers } = useUsers();
  const users = useFetch("users", dispatchUsers);

  const students = users.data.filter((item) => {
    return item.role === "student";
  });

  async function handleDelete(event, path, id) {
    event.preventDefault();
    if (window.confirm("Are you sure ?")) {
      await deleteDocument(path, id);
      alert("Student deleted");
    }
  }

  // Components
  const Students = students.map((item) => {
    return (
      <li key={item.id} className="student-card">
        <h3>{item.username}</h3>
        <button
          className="btn btn-ghost"
          onClick={(event) => handleDelete(event, "users", item.id)}
        >
          <img src={kickout} alt="out" />
          <h4>kick out</h4>
        </button>
      </li>
    );
  });

  // refactor -1 this can be improved by a lot doing something like this:
  if (users.loading) return <Spinner />;
  if (users.error !== null) return <BoxError />;
  // Also in order to further improve the next if/else we can move from having 2 variables to control the status fetching (loading and error)
  // to a single var and then make this shorter...

  return (
    <>
      {users.loading === true && <Spinner />}{" "}
      {users.error !== null && <BoxError />}
      {(!users.loading && users.error) === null && (
        <>
          {students.length > 0 ? (
            <ul className="students">{Students}</ul>
          ) : (
            <h2 className="empty">No student yet, come back soon ...</h2>
          )}
        </>
      )}
    </>
  );
}

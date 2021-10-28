//@ts-nocheck
//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Identificator from "components/shared/Identificator";
import Sorter from "components/shared/Sorter";
import CoursesList from "components/CoursesList";
import StudentList from "components/StudentList";
import Modal from "components/shared/Modal";

export default function Teacher() {
  // Global state
  const { user } = useAuth();

  //Local states
  const [selection, setSelection] = useState("courses");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-teacher">
      <Sorter hook={[selection, setSelection]} typeOfUser={user.role} />
      {selection === "courses" && (
        <>
          <CoursesList />
          <button
            className="btn btn-main btn-300"
            onClick={() => setIsOpen(true)}
          >
            <h4>New Course</h4>
          </button>
          <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
            New course
          </Modal>
        </>
      )}
      {selection === "students" && <StudentList />}
    </main>
  );
}

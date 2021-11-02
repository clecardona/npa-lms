//@ts-nocheck
//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Sorter from "components/UserPage/Sorter";
import CoursesList from "components/UserPage/CoursesList";
import StudentList from "components/UserPage/StudentList";
import Modal from "components/shared/Modal";

export default function Teacher() {
  // Global state
  const { user } = useAuth();

  //Local states
  const [selection, setSelection] = useState("courses");
  // Modal status is better handled in a ModalProvider as shown in class today (Nov 2, 2021)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-teacher">
      <Sorter hook={[selection, setSelection]} typeOfUser={user.role} />
      {selection === "courses" && (
        <>
          <CoursesList />
          {/* Refactor -1 (this block frin button until Modal should be a sub component just like <CourseList />) */}
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

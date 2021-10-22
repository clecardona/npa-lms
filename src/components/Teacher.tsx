//@ts-nocheck
import { useState } from "react";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";

import Sorter from "./shared/Sorter";
import Identificator from "./shared/Identificator";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import Card from "./shared/Card";
import Modal from "./shared/Modal";
import StudentList from "./StudentList";

export default function Teacher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState("courses");
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  //const students = useFetch("users", dispatchUsers); TODO - get students
  //const students = getStudents(users)

  //Components
  const Courses = courses.data.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  return (
    <main className="page-teacher">
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}

      {(!courses.loading && courses.error) === null && (
        <>
          <Identificator username="clecardona -HC" role="teacher" />
          <Sorter hook={[selection, setSelection]} />
          {selection === "courses" && (
            <>
              <section className="cards">{Courses}</section>
              <button
                className="btn btn-main btn-300"
                onClick={() => setIsOpen(true)}
              >
                <h4>New Course</h4>
              </button>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                New course
              </Modal>
            </>
          )}
          {selection === "students" && <StudentList />}
        </>
      )}
    </main>
  );
}

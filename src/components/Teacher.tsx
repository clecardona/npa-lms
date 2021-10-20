//@ts-nocheck
import { useState } from "react";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";

import Sorter from "./shared/Sorter";
import Identificator from "./shared/Identificator";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import Card from "./shared/Card";

export default function Teacher() {
  const [selection, setSelection] = useState("courses");
  const { dispatch } = useCourses();
  const courses = useFetch("courses", dispatch);
  //const students = useFetch("users", dispatch); TODO - get students

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
          <Identificator username="clecardona" role="teacher" />
          <Sorter hook={[selection, setSelection]} />
          {selection === "courses" && <section>{Courses}</section>}
          {selection === "students" && <section>Students</section>}
        </>
      )}
    </main>
  );
}

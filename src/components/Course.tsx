//@ts-nocheck
import { useParams } from "react-router-dom";
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import Files from "./shared/Files";
import Identificator from "./shared/Identificator";
import Links from "./shared/Links";

export default function Course() {
  const { courseID } = useParams();
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  // Const
  const course = getCourseById(courseID, courses.data);

  return (
    <div className="page-course">
      <Identificator role="student" username="leomessi-HC" />

      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <h2>{course.title}</h2>
          <Files data={course} />
          <Links data={course} />
        </>
      )}
    </div>
  );
}

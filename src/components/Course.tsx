//@ts-nocheck
//NPM Packages
import { useParams, Link } from "react-router-dom";

//Local imports
import { getById } from "scripts/methods";
import { useCourses } from "state/CoursesProvider";
import { useAuth } from "state/AuthProvider";
import Files from "./shared/Files";
import Links from "./shared/Links";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function Course() {
  //Global state
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  //Local state
  const { courseID } = useParams();
  // Constants
  const course = getById(courseID, courses.data);

  return (
    <main className="page-course">
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <h2>{course.title}</h2>
          <img src={course.imageURL} alt="img" className="illustration" />
          <p className="description">{course.content}</p>

          {course.links && <Links data={course.links} />}
          {course.file && (
            <a
              href={course.file}
              className="btn btn-third btn-file btn-180 "
              download
            >
              <h4>Download file ⬇</h4>
              {/* <Files data={course} /> */}
            </a>
          )}
          <Link
            to={"/playlist/" + courseID}
            className="btn btn-third btn-video btn-180"
          >
            <h4>Video playlist 🎥</h4>
          </Link>

          <Link to="/" className="btn btn-main btn-180">
            <h4>Back to courses</h4>
          </Link>
        </>
      )}
    </main>
  );
}

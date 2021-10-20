//@ts-nocheck
import { useParams } from "react-router-dom";
import { getCourseById } from "scripts/courses";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function Course() {
  const { courseID } = useParams();
  const { dispatch } = useCourses();
  const courses = useFetch("courses", dispatch);

  //const course = getCourseById(courseID, courses);

  //console.log(course);

  //Components
  /* const Files = data.files.map((item) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          {item}
        </a>
      </li>
    );
  }); */
  /*  const Links = data.links.map((item) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          {item}
        </a>
      </li>
    );
  }); */
  return (
    <div>
      COURSE {courseID}
      {/* <ul className="files">{Files}</ul>
      <ul className="links">{Links}</ul> */}
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <p>{getCourseById(courseID, courses.data).title}</p>
      )}
    </div>
  );
}

/* {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && ()} */

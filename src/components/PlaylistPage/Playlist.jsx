//NPM Packages
import { useParams, Link } from "react-router-dom";

//Local imports
import { getById } from "scripts/methods";
import useFetch from "hooks/useFetch";
import { useCourses } from "state/CoursesProvider";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import Player from "components/PlaylistPage/Player";

export default function Playlist() {
  // Global state
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);

  // Local state
  const { courseID } = useParams();

  // Constants
  const course = getById(courseID, courses.data);

  return (
    <main className="page-playlist">
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <section className="description">
            <p>{course.description}</p>
          </section>
          {course.playlist && (
            <Player initialVideo={course.playlist[0]} course={course} />
          )}
          <div className="buttons">
            <Link to={"/courses/" + courseID} className="btn btn-main btn-180">
              <h4>Back to course</h4>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

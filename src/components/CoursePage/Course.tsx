//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

//Local imports
import play from "assets/icns/play.svg";
import { getById } from "scripts/methods";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";
import Files from "components/CoursePage/Files";
import Links from "components/CoursePage/Links";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import Modal from "components/shared/Modal";

export default function Course() {
  //Global state
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  //Local states
  const { courseID } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  // Constants
  const course = getById(courseID, courses.data);
  const DEFAULT_IMAGE_URL =
    "https://cdn.dribbble.com/users/1890641/screenshots/5408138/media/b384d198d0631718554f88a93b89f9ae.png?compress=1&resize=1000x750";

  return (
    <main className="page-course">
      <h2 className="head-title">Course </h2>
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <div className="container">
            <h2 className="title">{course.title}</h2>
            <img
              className="illustration"
              src={course.imageURL ? course.imageURL : DEFAULT_IMAGE_URL}
              alt="img"
            />
            <div className="description">
              {course.playlist.length > 0 && (
                <Link to={"/playlist/" + courseID} className="btn btn-video">
                  <h4>
                    Video playlist <img src={play} alt="" />
                  </h4>
                </Link>
              )}
              <p>{course.content}</p>
            </div>

            <Links data={course.links} />
            <Files data={course.files} />

            <div className="buttons">
              <Link to="/" className="btn btn-main ">
                <h4>Back to courses</h4>
              </Link>
              <button
                className="btn btn-ghost "
                onClick={() => setIsOpen(true)}
              >
                <h4>
                  {course.playlist.length > 1 ? "Edit" : "Create"} video
                  playlist
                </h4>
              </button>
              <Modal
                type="edit-playlist"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                data={course}
              >
                {course.playlist.length > 1 ? "Edit" : "Create"} video playlist
              </Modal>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
//console.log(course.playlist.length);

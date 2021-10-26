import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

//Local imports
import { getById } from "scripts/methods";
import useFetch from "hooks/useFetch";
import { useAuth } from "state/AuthProvider";
import { useCourses } from "state/CoursesProvider";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";

export default function Playlist() {
  // Global State
  const { user } = useAuth();
  //Local state
  const { courseID } = useParams();
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  // Constants
  const course = getById(courseID, courses.data);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(courseID);
  return (
    <main className="page-playlist">
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <section className="title">
            <h1>{course.title}</h1>
            <h2>clecardona, teacher</h2>
          </section>
          <section className="description">
            <p>{course.description}</p>
          </section>
          <section className="video">
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
          </section>
          <aside className="list">
            <ul>
              <li>step</li>
              <li>step</li>
              <li>step</li>
              <li>step</li>
            </ul>
          </aside>
        </>
      )}
    </main>
  );
}

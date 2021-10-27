import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

import { useState } from "react";
import VideoList from "./VideoList";

export default function Player({ initialVideo, course }) {
  const [video, setVideo] = useState(initialVideo);
  return (
    <>
      <section className="title">
        <h1>{course.title}</h1>
        <h2>{video.content}</h2>
      </section>
      <YouTube videoId={getYouTubeID(video.url)} containerClassName="video" />

      <aside className="list">
        <VideoList course={course} setVideo={setVideo} />
      </aside>
    </>
  );
}

import YouTube from "react-youtube";

export default function VideoTest() {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main>
      <h1>TEST VIDEO</h1>
      <YouTube
        videoId="BmBDO6wA0Fo"
        opts={opts}
        className="video"
        containerClassName="player"
      />
    </main>
  );
}

/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
11;
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);

  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-full h-full aspect-video"
        width="560"
        height="315"
         src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

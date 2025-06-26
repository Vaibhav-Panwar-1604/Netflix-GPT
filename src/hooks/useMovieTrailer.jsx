import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

  const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
  const trailerVideos = useSelector(store => store.movies.trailerVideos);
  
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[1] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   if(!trailerVideos){
    getMovieVideos();
  }
  }, []);

}

export default useMovieTrailer;
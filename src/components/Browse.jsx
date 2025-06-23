/* eslint-disable no-unused-vars */
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../hooks/useTopRatedMovies.jsx";
import useUpcomingMovies from "../hooks/useUpcomingMovies.jsx";
import GptSearch from "./GptSearch.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;

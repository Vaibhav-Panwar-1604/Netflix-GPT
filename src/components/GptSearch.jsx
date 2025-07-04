import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10 ">
        <img
          src={BG_URL}
          alt="bg-img"
          className="h-screen object-cover md:w-screen"
        />
      </div>
    <div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearch;

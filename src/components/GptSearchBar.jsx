import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import openAi from "../utils/openAi";
import { addGptMoviesResults } from "../utils/gptSlice";
import searchMovieTMDB from "../hooks/useSearchMovieTMDB";

const GptSearchBar = () => {
  const langIdentifier = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example results given ahead. Example:Hangover,Ted,Rango,Central Intelligence,The Mask";

    const gptResults = await openAi.chat.completions.create({
      model: "openai/gpt-4o",
      messages: [{ role: "user", content: gptQuery }],
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const movieArray = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = movieArray.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMoviesResults({movieNames: movieArray, movieResults: tmdbResults}));
    
  };

  
  return (
    <div className="pt-[35%] sm:pt-[30%] md:pt-[6%] flex justify-center ">
      <form
        className=" bg-black w-full  md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langIdentifier].SearchPlaceholder}
          className="p-4 m-4 bg-white col-span-9"
          ref={searchText}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4"
        >
          {lang[langIdentifier].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

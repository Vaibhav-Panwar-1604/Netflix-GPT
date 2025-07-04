import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6">
      <h1 className="text-2xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hover-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={title}
              posterPath={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

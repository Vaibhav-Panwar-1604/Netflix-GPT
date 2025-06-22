import { IMG_CDN } from "../utils/constants";

const MovieData = ({title, posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt={title} src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieData;

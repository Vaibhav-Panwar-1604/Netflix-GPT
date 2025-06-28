import { IMG_CDN } from "../utils/constants";

const MovieData = ({title, posterPath}) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt={title} src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieData;

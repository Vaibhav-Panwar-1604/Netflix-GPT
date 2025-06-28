import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] p-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="flex items-center md:m-0">
            <button className="bg-white text-black mt-3 py-2 md:py-4 px-6 md:px-12 md:text-xl  rounded-lg flex items-center hover:bg-white/80"><FaPlay/>Play</button>
            <button className="mx-2 bg-gray-500/40 text-white mt-3 py-2 md:py-4 px-6 md:px-12 md:text-xl bg-opacity-50 rounded-lg flex items-center">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

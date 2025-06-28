import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeEvent = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex flex-col items-center md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          {gptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleChangeEvent}>
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button
            className="py-2 px-4 m-2 bg-purple-700 text-white mx-4 my-2 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {gptSearch ?"Homepage" :"GPT Search"}
          </button>
          <img className="w-12 h-12 mr-1" alt="Logo img" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

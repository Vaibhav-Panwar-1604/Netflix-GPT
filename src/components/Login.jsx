import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute w-3/12  text-white p-12 my-40 mx-auto right-0 left-0 text-whit rounded-lg bg-black/80 h-[600px]">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className=" my-4 p-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className=" my-4 p-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4  bg-gray-700 w-full"
        />
        <button className="my-6 p-4 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 " onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

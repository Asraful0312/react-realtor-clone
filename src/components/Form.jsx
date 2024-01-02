/* eslint-disable react/prop-types */
import { Inputes } from "../components/Inputes";
import { Link } from "react-router-dom";
import { GAuth } from "../components/GAuth";
export const Form = (props) => {
  const { handleChange, signinData, fullname } = props;
    const { email, password, fullName } = signinData;
    console.log(fullName);
  return (
    <form className="w-full flex flex-col gap-5">
      {fullname && (
        <Inputes
          value={fullName}
          type="text"
          className="w-full p-2 outline-none border"
          placeholder="Enter your name"
          onChange={(e) => handleChange(e, "fullName")}
        />
      )}
      <Inputes
        type="email"
        value={email}
        className="w-full p-2 outline-none border"
        placeholder="Enter your Email..."
        onChange={(e) => handleChange(e, "email")}
      />
      <Inputes
        eyeShow
        type="password"
        value={password}
        className="w-full p-2 outline-none border"
        placeholder="Enter your Password..."
        onChange={(e) => handleChange(e, "password")}
      />
      <div className="flex items-center justify-between">
        <div>
          <h1>
            {fullname ? "Already have a account?" : "Don't have a account?"}{" "}
            <Link
              to={fullname ? "/signin" : "/signup"}
              className="text-red-500"
            >
              {!fullname ? "Sign up" : "Sign in"}
            </Link>
          </h1>
        </div>
          <Link to="/forgot-password" className="text-blue-500">
            Forgot password?
          </Link>
      </div>
      <Inputes
        type="submit"
        className="w-full rounded hover:bg-blue-600 transition-all duration-200 p-2 outline-none border-none bg-blue-500 text-white font-medium"
        value="Sign up"
      />

      <div className="flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
        <p className=" text-center mx-2">OR</p>
      </div>
      {fullname ? (
        <GAuth text="SIGN UP WITH GOOGLE" />
      ) : (
        <GAuth text="SIGN IN WITH GOOGLE" />
      )}
    </form>
  );
};

import { useState } from "react";
import { Inputes } from "../components/Inputes";
import { Link } from "react-router-dom";
import { GAuth } from "../components/GAuth";

export const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  console.log(email);

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-center text-3xl mt-6 font-medium">Forgot Password</h2>
      <div className="md:flex-row items-center flex flex-col gap-10 mt-5">
        <div className="w-full md:w-1/2">
          <img
            className="object-contain rounded-md"
            src="https://cdn.pixabay.com/photo/2015/12/12/14/25/door-1089560_1280.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <form className="w-full flex flex-col gap-5">
            <Inputes
              value={email}
              type="text"
              className="w-full p-2 outline-none border"
              placeholder="Enter your email"
              onChange={(e) => handleChange(e)}
            />
            <div className="flex items-center justify-between">
              <div>
                <h1>
                  Dont have a account?{" "}
                  <Link to="/signup" className="text-red-500">
                    Register
                  </Link>
                </h1>
              </div>
              <Link to="/signin" className="text-blue-500">
                Sign in Instad
              </Link>
            </div>
            <Inputes
              type="submit"
              className="w-full rounded hover:bg-blue-600 transition-all duration-200 p-2 outline-none border-none bg-blue-500 text-white font-medium"
              value="SEND RESET PASSWORD"
            />

            <div className="flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className=" text-center mx-2">OR</p>
            </div>
            <GAuth text="SIGN UP WITH GOOGLE" />
          </form>
        </div>
      </div>
    </div>
  );
};

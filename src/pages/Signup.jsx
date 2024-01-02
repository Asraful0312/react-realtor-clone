import { useState } from "react";

import { Form } from "../components/Form";

export const Signup = () => {
  const [signinData, setSigninData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e, inputType) => {
    setSigninData((prev) => ({ ...prev, [inputType]: e.target.value }));
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-center text-3xl mt-6 font-medium">Sign Up</h2>
      <div className="md:flex-row items-center flex flex-col gap-10 mt-5">
        <div className="w-full md:w-1/2">
          <img
            className="object-contain rounded-md"
            src="https://cdn.pixabay.com/photo/2015/12/12/14/25/door-1089560_1280.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <Form
            signinData={signinData}
            fullname={true}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

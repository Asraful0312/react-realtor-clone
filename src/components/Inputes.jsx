import { Fragment, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

export const Inputes = ({ type, eyeShow, ...rest }) => {
  const [togglePass, setTogglePass] = useState(false);

  const handleToggle = () => {
    setTogglePass(!togglePass);
  };

  return (
    <div className="relative">
      {eyeShow ? (
        <Fragment>
          <input type={togglePass ? "text" : "password"} {...rest} />
          <div
            onClick={handleToggle}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {togglePass ? <FaEye /> : <FaEyeSlash />}
          </div>
        </Fragment>
      ) : (
        <input type={type} {...rest} />
      )}
    </div>
  );
};

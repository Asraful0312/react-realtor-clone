import { FcGoogle } from "react-icons/fc";
export const GAuth = ({ text }) => {
  return (
    <button
      className="flex gap-2 transition duration-200 rounded
     hover:bg-red-600 items-center justify-center w-full bg-red-500 p-[10px] text-sm text-white font-medium"
    >
      {text}
      <FcGoogle />
    </button>
  );
};

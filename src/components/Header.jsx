import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-white h-10 w-full py-2 shadow-md sticky top-0 left-0 right-0 z-20">
      <header className="container flex items-center mx-auto justify-between">
        <Link to="/">
          <img
            className="cursor-pointer"
            width={"120px"}
            height={"50px"}
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
          />
        </Link>

        <ul className="flex items-center gap-4 text-sm font-medium">
          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 pb-3 border-red-500"
                  : "text-gray-400 pb-3"
              }
            >
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 pb-3 border-red-500"
                  : "text-gray-400 pb-3"
              }
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 pb-3 border-red-500"
                  : "text-gray-400 pb-3"
              }
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

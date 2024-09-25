import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import Dropdown from "./DropdownMenu";

export default function Navbar() {
  return (
    <nav
      className="relative
     z-50"
    >
      <div className="flex justify-between text-page-color bg-elements-stroke  lg:px-24 py-5 sm:px-5">
        <p className="sm:hidden lg:block">
          555-0198 123 Maple Street, Spriengfield, IL 62701
        </p>
        <p>Monday - Saturday: 9 am - 11.30 pm</p>
      </div>
      <div className=" lg:px-24 sm:px-5">
        <div className=" flex flex-row border-gray-900 rounded-full py-2 items-center lg:text-lg sm:text-lg  md:text-lg  justify-between">
          <Link to="/">
            <div className="logo-container mr-10 rounded-full">
              <img
                src="/public/66aab1e65f8363894a558a6c_Main Logo.svg"
                alt=""
                className="md:w-[px] sm:w-[] lg:w-[150px] "
              />
            </div>
          </Link>
          <div className="nav-container text-gray-200 lg:flex md:flex gap-5">
            <ul className="flex gap-5 items-center sm:hidden ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/about">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <p className="text-sm">Cart (0)</p>
              <Dropdown />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" text-page-color w-fit px-5 bg-button-color p-1 text-center sm:hidden lg:block"
            >
              <NavLink to="/">Get Started </NavLink>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

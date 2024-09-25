import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { IoMenuSharp } from "react-icons/io5";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className={`px-3 py-3 ${isOpen ? "hidden" : "block"} `}
      >
        <IoMenuSharp className="text-2xl " />
      </button>
      <button
        onClick={closeDropdown}
        className={`px-3 py-3 bg-button-color ${isOpen ? "block" : "hidden"}`}
      >
        <IoMenuSharp className="text-2xl text-page-color" />
      </button>

      <div
        className={` absolute w-full  left-0 bg-page-color translate-all duration-500 flex flex-col items-center gap-5 py-10 ${
          isOpen ? "translate-y-0" : "-translate-y-[200%]"
        }`}
        ref={menuRef}
      >
        <NavLink to="/" className="block px-4 py-2 text-gray-800 ">
          Home
        </NavLink>
        <NavLink to="/about" className="block px-4 py-2 text-gray-800 ">
          About
        </NavLink>
        <NavLink to="/services" className="block px-4 py-2 text-gray-800 ">
          Services
        </NavLink>
        <NavLink to="/pricing" className="block px-4 py-2 text-gray-800 ">
          Pricing
        </NavLink>
        <NavLink to="/blog" className="block px-4 py-2 text-gray-800 ">
          Blog
        </NavLink>
        <NavLink to="/contact" className="block px-4 py-2 text-gray-800 ">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Dropdown;

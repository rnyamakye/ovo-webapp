import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";

const cartButton = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const menuRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <div className="relative">
      <button
        onClick={togglePopover}
        className="px-4 py-2 flex items-center gap-1 focus:outline-none"
      >
        Cart (0)
      </button>
      {isPopoverOpen && (
        <div
          className="absolute right-[50%] top-[40vh] mt-2 w-[500px] h-fit bg-white border border-gray-200 backdrop-blur-lg "
          ref={menuRef}
        >
          <div className="p-4 flex justify-between border-b mx-2 ">
            <p className="font-medium">Your Cart</p>
            <button onClick={closePopover}>
              <IoCloseSharp className="w-5" />
            </button>
          </div>
          <div className="text-center p-20">
            <p>No items Found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default cartButton;

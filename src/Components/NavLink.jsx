import { useLocation, Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex gap-5  ${
        isActive
          ? " text-page-color bg-button-color w-fit p-3"
          : "text-gray-400 "
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

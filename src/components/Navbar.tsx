import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full z-50 px-8 py-4 bg-white/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link
          to="/"
          className={`relative text-sm tracking-wide ${
            isActive("/") ? "text-black" : "text-gray-500"
          } hover:text-black transition-colors duration-300`}
        >
          Home
          {isActive("/") && (
            <motion.div
              layoutId="navbar-underline"
              className="absolute -bottom-1 left-0 right-0 h-px bg-black"
            />
          )}
        </Link>

        {/* Other Nav Items */}
        <div className="flex gap-12 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm tracking-wide ${
                isActive(item.path) ? "text-black" : "text-gray-500"
              } hover:text-black transition-colors duration-300`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

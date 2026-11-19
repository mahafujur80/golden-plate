
import { useState } from "react";
import { FaUtensils, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-amber-700 font-semibold"
        : "text-stone-600 hover:text-amber-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF5] border-b border-amber-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-700 text-white flex items-center justify-center">
              <FaUtensils className="text-xl" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-stone-800 tracking-wide">
                Golden <span className="text-amber-700">Plate</span>
              </h1>
              <p className="text-[10px] tracking-[3px] text-stone-500 uppercase">
                Restaurant & Cafe
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Book a Table
              <FaArrowRight className="text-sm" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-stone-800 p-2"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-amber-100 py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.end}
                  onClick={() => setIsOpen(false)}
                  className={linkStyle}
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-3 rounded-lg font-medium transition-colors"
              >
                Book a Table
                <FaArrowRight />
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

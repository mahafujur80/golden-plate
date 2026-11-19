
import { Link } from "react-router";
import {
  FaUtensils,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#29231D] text-stone-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-16 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center">
                <FaUtensils className="text-xl text-stone-900" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Golden <span className="text-amber-400">Plate</span>
                </h2>
                <p className="text-[10px] tracking-[3px] uppercase text-stone-400">
                  Restaurant & Cafe
                </p>
              </div>
            </Link>

            <p className="text-sm leading-7 text-stone-400 mb-6">
              Experience the perfect blend of authentic flavors,
              fresh ingredients, and unforgettable dining.
              Every meal is made with love.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaTwitter, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label="Social media"
                  className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center text-stone-300 hover:bg-amber-500 hover:text-stone-900 hover:border-amber-500 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <FaArrowRight className="text-[10px] text-amber-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Contact Us
            </h3>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" />
                <span>Dinajpur, Bangladesh</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400 shrink-0" />
                <span>+880 1700-000000</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400 shrink-0" />
                <span>info@goldenplate.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Opening Hours
            </h3>

            <div className="flex items-center gap-3 mb-5">
              <FaClock className="text-amber-400 text-xl" />
              <p className="text-sm">Visit Us Today</p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-stone-400">Saturday - Thursday</span>
                <span className="text-amber-300">10 AM - 10 PM</span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-stone-400">Friday</span>
                <span className="text-amber-300">2 PM - 11 PM</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-3 rounded-lg text-sm font-semibold transition"
            >
              Book a Table <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">

          <p className="text-center">
            © {new Date().getFullYear()} Golden Plate Restaurant.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-amber-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-amber-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-amber-400 transition">
              Contact
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;


import { Link } from "react-router";
import {
  FaUtensils,
  FaArrowLeft,
  FaHome,
  FaSearch,
} from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-[75vh] bg-[#FFFCF5] flex items-center justify-center px-5 py-20">

      <div className="max-w-2xl w-full text-center">

        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-7 rounded-2xl bg-amber-100 flex items-center justify-center">
          <FaUtensils className="text-4xl text-amber-700" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-amber-700 tracking-wider">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-5 mb-4">
          Oops! This Page Is Missing
        </h2>

        {/* Description */}
        <p className="text-stone-600 text-base md:text-lg leading-8 max-w-lg mx-auto mb-9">
          Looks like this page is not on our menu!
          The page you are looking for might have been
          removed, renamed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-amber-700 text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

        {/* Bottom Text */}
        <div className="mt-14 pt-7 border-t border-amber-100">
          <p className="text-stone-500 text-sm">
            Hungry? Come back and explore our delicious menu!
          </p>

          <p className="text-amber-700 font-bold tracking-widest uppercase text-xs mt-4">
            Golden Plate Restaurant
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotFound;

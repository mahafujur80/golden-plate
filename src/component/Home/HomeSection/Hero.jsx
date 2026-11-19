
import { FaArrowRight, FaUtensils } from "react-icons/fa";
import { Link } from "react-router";
import bgimg from "../../../assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[650px] md:min-h-[750px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-12 py-20">
        <div className="max-w-3xl">

          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-amber-400"></span>
            <p className="text-amber-400 uppercase tracking-[4px] text-sm font-semibold">
              Welcome to Golden Plate
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Taste the
            <span className="block text-amber-400">
              Difference.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg leading-8 max-w-xl mb-9">
            Experience the perfect blend of authentic flavors,
            fresh ingredients, and unforgettable dining.
            Every dish is crafted with passion just for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-stone-950 px-7 py-4 rounded-md font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Explore Our Menu
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/70 hover:bg-white hover:text-stone-900 text-white px-7 py-4 rounded-md font-semibold transition-all duration-300"
            >
              <FaUtensils />
              Book a Table
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-wrap gap-8 mt-14 pt-7 border-t border-white/20">
            <div>
              <h3 className="text-2xl font-bold text-amber-400">100%</h3>
              <p className="text-gray-300 text-sm mt-1">Fresh Ingredients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400">Expert</h3>
              <p className="text-gray-300 text-sm mt-1">Professional Chefs</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400">Quality</h3>
              <p className="text-gray-300 text-sm mt-1">Premium Dining</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
};

export default Hero;
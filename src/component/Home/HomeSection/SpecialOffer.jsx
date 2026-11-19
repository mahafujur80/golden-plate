
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const SpecialOffer = () => {
  return (
    <section className="bg-[#FFFCF5] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#29231D] px-7 py-16 md:px-16 md:py-20 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-amber-400 uppercase tracking-[4px] font-semibold text-sm mb-5">
              Special Offer
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Make Your Moments Special With Delicious Food
            </h2>

            <p className="text-stone-300 max-w-xl mx-auto mt-6 leading-7">
              Great food, wonderful atmosphere and unforgettable memories
              are waiting for you at Golden Plate.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-9 bg-amber-600 hover:bg-amber-700 text-white px-9 py-4 rounded-lg font-semibold transition duration-300"
            >
              Book a Table <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

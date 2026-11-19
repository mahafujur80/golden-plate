
import {
  FaUtensils,
  FaTruck,
  FaShoppingBag,
  FaGlassCheers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router";

const services = [
  {
    icon: FaUtensils,
    title: "Dine In",
    description:
      "Enjoy delicious meals in our comfortable and welcoming restaurant atmosphere.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    icon: FaTruck,
    title: "Home Delivery",
    description:
      "Get your favorite meals delivered fresh and conveniently to your doorstep.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800",
  },
  {
    icon: FaShoppingBag,
    title: "Takeaway",
    description:
      "Order your favorite dishes and enjoy them wherever you want.",
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800",
  },
  {
    icon: FaGlassCheers,
    title: "Catering",
    description:
      "Make your special occasions memorable with our delicious catering service.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  },
];

const Services = () => {
  return (
    <main className="bg-[#FFFCF5]">

      {/* Header */}
      <section className="bg-[#F5EBDD] py-20 text-center px-5">
        <p className="text-amber-700 font-semibold uppercase tracking-[3px] text-sm">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mt-3">
          Our Services
        </h1>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
          From dining in to special events, we make every food
          experience special.
        </p>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <service.icon className="text-amber-700 text-2xl mb-4" />

                <h2 className="text-xl font-bold text-stone-800 mb-3">
                  {service.title}
                </h2>

                <p className="text-stone-600 text-sm leading-7 mb-5">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:gap-4 transition-all"
                >
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7C421D] py-16 px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready for a Delicious Experience?
        </h2>
        <p className="text-amber-100 mb-8">
          Visit us and enjoy the taste of Golden Plate.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-stone-900 px-8 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
};

export default Services;

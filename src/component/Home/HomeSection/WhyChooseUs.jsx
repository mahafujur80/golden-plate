
import {
  FaUtensils,
  FaLeaf,
  FaHeart,
  FaTruck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils />,
    title: "Quality Food",
    description: "We use fresh and high-quality ingredients to prepare every meal.",
  },
  {
    icon: <FaHeart />,
    title: "Made With Love",
    description: "Every dish is prepared with care, passion and attention to detail.",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description: "We believe fresh ingredients make every meal more delicious.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    description: "Enjoy your favorite food at home with our quick delivery service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5EBDD] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-700 font-semibold uppercase tracking-[3px] text-sm mb-3">
            Why Golden Plate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Why Choose Us?
          </h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            We are committed to giving you the best dining experience with
            delicious food and excellent service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#FFFCF5] rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-stone-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-7 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

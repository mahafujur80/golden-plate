
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const dishes = [
  {
    name: "Grilled Chicken",
    category: "Main Course",
    price: "৳450",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700",
  },
  {
    name: "Delicious Burger",
    category: "Fast Food",
    price: "৳280",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },
  {
    name: "Italian Pasta",
    category: "Special Dish",
    price: "৳350",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
  },
];

const PopularDishes = () => {
  return (
    <section className="bg-[#FFFCF5] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-700 font-semibold uppercase tracking-[3px] text-sm mb-3">
            Our Special Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
            Our Popular Dishes
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Discover our most loved dishes, prepared with fresh ingredients
            and unforgettable flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={13} />
                  ))}
                </div>

                <p className="text-sm text-amber-700 font-medium">
                  {dish.category}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <h3 className="text-xl font-bold text-stone-800">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-700">
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Explore Our Menu <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;

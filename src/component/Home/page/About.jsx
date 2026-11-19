
import {
  FaAward,
  FaHeart,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <main className="bg-[#FFFCF5]">

      {/* Page Header */}
      <section className="bg-[#F5EBDD] py-20 text-center px-5">
        <p className="text-amber-700 font-semibold tracking-[3px] uppercase text-sm mb-3">
          Discover Our Story
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800">
          About Golden Plate
        </h1>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
          More than just food, we create unforgettable dining experiences.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
            alt="Restaurant dining"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <p className="text-amber-700 uppercase tracking-widest font-semibold text-sm mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight mb-6">
            Bringing People Together Through Great Food
          </h2>
          <p className="text-stone-600 leading-8 mb-5">
            Golden Plate is a place where delicious food meets
            warm hospitality. We believe every meal should be
            a special experience.
          </p>
          <p className="text-stone-600 leading-8 mb-7">
            From carefully selected ingredients to beautifully
            prepared dishes, our goal is to make every visit
            memorable for our guests.
          </p>

          <Link
            to="/services"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded-lg transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F5EBDD] py-16">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-9 rounded-2xl">
            <FaHeart className="text-amber-700 text-3xl mb-5" />
            <h3 className="text-2xl font-bold text-stone-800 mb-3">
              Our Mission
            </h3>
            <p className="text-stone-600 leading-7">
              To serve delicious meals with quality ingredients,
              excellent hospitality, and a passion for food.
            </p>
          </div>

          <div className="bg-white p-9 rounded-2xl">
            <FaAward className="text-amber-700 text-3xl mb-5" />
            <h3 className="text-2xl font-bold text-stone-800 mb-3">
              Our Vision
            </h3>
            <p className="text-stone-600 leading-7">
              To become a favorite dining destination known
              for exceptional taste and memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
            What Makes Us Special
          </p>
          <h2 className="text-3xl font-bold text-stone-800 mt-3">
            Our Commitment
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FaUtensils, title: "Quality Food" },
            { icon: FaHeart, title: "Made With Love" },
            { icon: FaUsers, title: "Expert Team" },
            { icon: FaAward, title: "Great Service" },
          ].map((item) => (
            <div key={item.title} className="text-center p-7 bg-white border border-amber-100 rounded-xl">
              <item.icon className="text-amber-700 text-3xl mx-auto mb-4" />
              <h3 className="font-bold text-stone-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;

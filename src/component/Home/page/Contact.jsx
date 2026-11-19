
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      detail: "Dinajpur, Bangladesh",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      detail: "+880 1700-000000",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      detail: "info@goldenplate.com",
    },
    {
      icon: FaClock,
      title: "Opening Hours",
      detail: "10:00 AM - 10:00 PM",
    },
  ];

  const inputStyle =
    "w-full bg-[#FFFCF5] border border-amber-100 rounded-lg px-4 py-3 outline-none focus:border-amber-600 transition text-stone-700";

  return (
    <main className="bg-[#FFFCF5]">

      {/* Header */}
      <section className="bg-[#F5EBDD] py-20 text-center px-5">
        <p className="text-amber-700 uppercase tracking-[3px] font-semibold text-sm">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mt-3">
          Contact Us
        </h1>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
          Have a question or want to book a table? We would
          love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <p className="text-amber-700 uppercase tracking-widest font-semibold text-sm mb-3">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold text-stone-800 mb-5">
              Let's Talk About Food!
            </h2>

            <p className="text-stone-600 leading-8 mb-9">
              Whether you want to make a reservation, ask about
              our services, or simply say hello, feel free to
              contact us.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 shrink-0 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center">
                    <item.icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden h-64 bg-[#F5EBDD] flex items-center justify-center">
              <div className="text-center text-stone-600">
                <FaMapMarkerAlt className="text-3xl text-amber-700 mx-auto mb-3" />
                <p className="font-semibold">Our Restaurant Location</p>
                <p className="text-sm mt-1">Dinajpur, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-9 shadow-sm border border-amber-100">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-stone-500 text-sm mb-7">
              Fill out the form below and we will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className={`${inputStyle} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-lg font-semibold transition"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhoneAlt className="text-orange-600 text-xl" />
              <p className="text-gray-700">+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope className="text-orange-600 text-xl" />
              <p className="text-gray-700">contact@amislove.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-orange-600 text-xl" />
              <p className="text-gray-700">123 Dessert Street, Sweet City</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
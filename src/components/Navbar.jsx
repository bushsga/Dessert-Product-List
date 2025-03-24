import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Navbar = ({ cart, setShowTrackingPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate the total number of items in the cart
  const totalItems = Object.values(cart).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-600 cursor-pointer" onClick={() => setShowTrackingPage(false)}>Dessert Cart</div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li className="hover:text-orange-600 cursor-pointer" onClick={() => setShowTrackingPage(false)}>Home</li>
        <li className="hover:text-orange-600 cursor-pointer">Products</li>
        <li className="hover:text-orange-600 cursor-pointer">Contact</li>
      </ul>

      {/* Cart Icon */}
      <div className="relative">
        <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-orange-600" />
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-2">
          {totalItems}
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-700 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation Modal */}
      <Modal
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        showCloseIcon={false}
        closeOnOverlayClick={true}
        classNames={{
          modal: "rounded-md p-0 top-0 mt-0 w-full", // Custom styles for the modal
          overlay: "bg-black bg-opacity-30", // Optional: Add a semi-transparent background
        }}
      >
        <div className="w-full bg-white">
          <ul className="flex flex-col items-start space-y-4 py-4 px-6">
            <li className="hover:text-orange-600 cursor-pointer border-b border-gray-200 pb-2 w-full">
              Home
            </li>
            <li className="hover:text-orange-600 cursor-pointer border-b border-gray-200 pb-2 w-full">
              Products
            </li>
            <li className="hover:text-orange-600 cursor-pointer border-b border-gray-200 pb-2 w-full">
              Contact
            </li>
          </ul>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
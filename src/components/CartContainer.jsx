import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const CartContainer = ({ cart, setIsModalOpen, setOrders }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control the form modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [formError, setFormError] = useState("");

  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, address } = formData;

    // Validate form fields
    if (!name || !email || !address) {
      setFormError("All fields are required.");
      return;
    }

    // Generate a unique tracking ID
    const newTrackingId = `TRACK-${Date.now()}`;

    // Save the order details
    const newOrder = {
      trackingId: newTrackingId,
      name,
      email,
      address,
      cartItems: cart, // Pass the cart items
      totalPrice,
      status: "Preparing", // Initial status
    };

    // Update the orders state in page.js
    setOrders((prevOrders) => [...prevOrders, newOrder]);

    // Clear form and open the Order Confirmation Modal
    setFormError("");
    setFormData({ name: "", email: "", address: "" });
    setIsFormOpen(false); // Close the form modal
    setIsModalOpen(true); // Open the Order Confirmation Modal
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-1/3 max-h-[300px] overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-8">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            className="w-32 mx-auto"
          />
          <p className="text-gray-500 mt-4">Your added items will appear here.</p>
        </div>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.name} className="flex justify-between items-center py-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity}x @ ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveFromCart(item.name)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold text-gray-800">Order Total</p>
              <p className="text-lg font-semibold text-orange-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)} // Open the form modal
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-full mt-4 hover:bg-orange-700"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {/* Form Modal */}
      <Modal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        center
        showCloseIcon={false}
        closeOnOverlayClick={false}
        classNames={{
          modal: "rounded-md p-4 w-full max-w-sm sm:max-w-md md:max-w-lg",
          overlay: "bg-black bg-opacity-50 backdrop-blur-none",
        }}
      >
        <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Fill Your Details</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
          </div>
          {formError && <p className="text-red-600 text-sm">{formError}</p>}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CartContainer;


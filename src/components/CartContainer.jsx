import React from "react";
import { FaTrash } from "react-icons/fa";

const CartContainer = ({ cart, handleRemoveFromCart, setIsModalOpen }) => {
  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-1/3 max-h-[270px] overflow-y-auto">
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
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt="Carbon Neutral"
                className="w-6 h-6 mr-2"
              />
              <p>This is carbon neutral delivery</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-full mt-4 hover:bg-orange-700"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
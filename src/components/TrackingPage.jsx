import React from "react";
import { FaShippingFast, FaCheckCircle, FaClock } from "react-icons/fa";

const TrackingPage = ({ orders }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-x-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src="/assets/images/empty-orders.svg" // Replace with your actual image path
            alt="No Orders"
            className="w-48 h-48 mb-4"
          />
          <p className="text-gray-500 text-lg">You have no orders yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Order #{index + 1}
                </h3>
                <FaShippingFast className="text-orange-600 text-2xl" />
              </div>

              {/* Order Details */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Tracking ID:</span>{" "}
                  {order.trackingId}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Name:</span> {order.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Email:</span> {order.email}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Address:</span> {order.address}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Total Price:</span> $
                  {order.totalPrice.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="font-bold">Status:</span>{" "}
                  {order.status === "Preparing" ? (
                    <FaClock className="text-yellow-500 ml-2" />
                  ) : (
                    <FaCheckCircle className="text-green-500 ml-2" />
                  )}
                  <span className="ml-2">{order.status}</span>
                </p>
              </div>

              {/* Product Thumbnails */}
              <div className="mt-4">
                <h4 className="text-sm font-bold text-gray-800 mb-2">
                  Products:
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {order.cartItems &&
                    Object.values(order.cartItems).map((item, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <img
                          src={item.image.thumbnail} // Replace with the correct image path
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Order Footer */}
              <div className="mt-4">
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingPage;
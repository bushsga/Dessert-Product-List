import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const OrderConfirmationModal = ({ isOpen, onClose, cart, totalPrice, resetCart, navigateToTrackingPage }) => {
  if (!isOpen) return null;

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const cartItems = Object.values(cart);

  return (
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} closeOnOverlayClick={false} classNames={{
      modal: "rounded-md"
    }}>
    <div className="">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        {/* Order Confirmed Icon */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
            className="w-16 h-16"
          />
        </div>

        {/* Heading */}
        <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
          Order Confirmed
        </h2>
        <p className="text-gray-600 text-center mb-6">We hope you enjoy your food!</p>

        {/* Ordered Products */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-4">
              {/* Thumbnail */}
              <img
                src={item.image.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity}x @ ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Total Price for Product */}
              <p className="text-sm font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="border-t border-gray-200 mt-6 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-gray-800">Order Total</p>
            <p className="text-lg font-semibold text-orange-600">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Start New Order Button */}
        <button
          onClick={() => {
            resetCart();
            onClose();
            navigateToTrackingPage(); // Navigate to the Tracking Page
          }}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-full mt-6 hover:bg-orange-700"
        >
          Start New Order
        </button>
      </div>
    </div>
    </Modal>
  );
};

export default OrderConfirmationModal;
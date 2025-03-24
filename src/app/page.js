"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CartContainer from "@/components/CartContainer";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";
import TrackingPage from "@/components/TrackingPage";

export default function Home() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTrackingPage, setShowTrackingPage] = useState(false); // State to toggle between pages
  const [orders, setOrders] = useState([]); // State to store all orders

  const handleRemoveFromCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productName];
      return updatedCart;
    });
  };

  const resetCart = () => {
    setCart({});
  };

  const totalPrice = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigateToTrackingPage = () => {
    setShowTrackingPage(true); // Navigate to the Tracking Page
  };

  return (
    <div>
      <Navbar cart={cart} setShowTrackingPage={setShowTrackingPage}/>

      <main className="p-4 flex flex-col lg:flex-row gap-6">
        {showTrackingPage ? (
          <TrackingPage orders={orders} />
        ) : (
          <>
            <div className="flex-1">
              <ProductGrid cart={cart} setCart={setCart} />
            </div>
            <CartContainer
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              setIsModalOpen={setIsModalOpen}
              setOrders={setOrders} // Pass setOrders to CartContainer
            />
          </>
        )}
      </main>

      {/* Order Confirmation Modal */}
      {!showTrackingPage && (
        <OrderConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cart={cart}
          totalPrice={totalPrice}
          resetCart={resetCart}
          navigateToTrackingPage={navigateToTrackingPage} // Pass navigateToTrackingPage
        />
      )}
    </div>
  );
}

"use client";
import React, { useState } from "react";

import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CartContainer from "@/components/CartContainer";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";
import TrackingPage from "@/components/TrackingPage";
import SplashScreen from "@/components/SplashScreen";


export default function Home() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTrackingPage, setShowTrackingPage] = useState(false);
  const [orders, setOrders] = useState([]);
  const [showSplash, setShowSplash] = useState(true);

  const handleRemoveFromCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productName];
      return updatedCart;
    });
  };

  const navigateToTrackingPage = () => {
    setShowTrackingPage(true); // Navigate to the Tracking Page
  };

  const resetCart = () => {
    setCart({});
  };

  const totalPrice = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {showSplash ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <>
          <Navbar cart={cart} setShowTrackingPage={setShowTrackingPage} />
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
                  setOrders={setOrders}
                />
              </>
            )}
          </main>
          {!showTrackingPage && (
            <OrderConfirmationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              cart={cart}
              totalPrice={totalPrice}
              resetCart={resetCart}
              navigateToTrackingPage={navigateToTrackingPage}
            />
          )}
        </>
      )}
    </div>
  );
}

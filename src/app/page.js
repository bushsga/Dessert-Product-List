"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CartContainer from "@/components/CartContainer";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";

export default function Home() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div>
      <Navbar cart={cart} />
      <main className="p-4 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <ProductGrid cart={cart} setCart={setCart} />
        </div>
        <CartContainer
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          setIsModalOpen={setIsModalOpen}
        />
      </main>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        resetCart={resetCart}
      />
    </div>
  );
}

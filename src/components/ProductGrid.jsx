"use client";
import React from "react";
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import data from "@/data/data.json";

const ProductGrid = ({ cart, setCart }) => {
  const handleAddToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.name]: prevCart[product.name]
        ? { ...prevCart[product.name], quantity: prevCart[product.name].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  const handleIncrease = (productName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: {
        ...prevCart[productName],
        quantity: prevCart[productName].quantity + 1,
      },
    }));
  };

  const handleDecrease = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productName].quantity === 1) {
        delete updatedCart[productName];
      } else {
        updatedCart[productName].quantity -= 1;
      }
      return updatedCart;
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((product) => (
        <div
          key={product.name}
          className="relative bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Responsive Product Image */}
          <picture>
            <source
              srcSet={product.image.mobile}
              media="(max-width: 480px)"
            />
            <source
              srcSet={product.image.tablet}
              media="(min-width: 481px) and (max-width: 1023px)"
            />
            <source
              srcSet={product.image.desktop}
              media="(min-width: 1024px)"
            />
            <img
              src={product.image.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </picture>

          {/* Add to Cart Button */}
          {!cart[product.name] ? (
            <button
              onClick={() => handleAddToCart(product)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 border border-orange-600 px-3 py-1 text-sm rounded-full flex items-center space-x-2 hover:bg-orange-600 hover:text-white"
            >
              <FaCartPlus />
              <span>Add to Cart</span>
            </button>
          ) : (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded-full flex items-center space-x-4">
              <button onClick={() => handleDecrease(product.name)}>
                <FaMinus />
              </button>
              <span>{cart[product.name].quantity}</span>
              <button onClick={() => handleIncrease(product.name)}>
                <FaPlus />
              </button>
            </div>
          )}

          {/* Product Details */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-semibold text-orange-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
import React, { useEffect, useState } from "react";
import { FaIceCream, FaCookieBite, FaCandyCane, FaBirthdayCake } from "react-icons/fa"; // Dessert-related icons

const SplashScreen = ({ setShowSplash }) => {
  const [countdown, setCountdown] = useState(3); // Countdown timer state

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Hide the splash screen after 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(splashTimer);
    };
  }, [setShowSplash]);

  return (
    <div className="fixed inset-0 bg-animated-gradient flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Floating Dessert Icons */}
      <div className="absolute top-10 left-10 animate-float">
        <FaCookieBite className="text-white text-4xl" />
      </div>
      <div className="absolute top-20 right-16 animate-float-slow">
        <FaCandyCane className="text-white text-5xl" />
      </div>
      <div className="absolute bottom-16 left-20 animate-float">
        <FaBirthdayCake className="text-white text-6xl" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float-slow">
        <FaIceCream className="text-white text-4xl" />
      </div>

      {/* Logo/Icon */}
      <div className="animate-bounce mb-4">
        <FaIceCream className="text-white text-6xl" />
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold text-white animate-fade-in text-center font-pacifico">
        Welcome to AmisLove Dessert Store
      </h1>

      {/* Subtext */}
      <p className="text-lg text-white mt-4 animate-fade-in text-center font-pacifico">
        Indulge in the sweetest treats!
      </p>

      {/* Countdown Timer */}
      <div className="mt-6 text-white text-2xl font-bold">
        {countdown > 0 ? `Loading in ${countdown}...` : "Enjoy!"}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white h-1 mt-6">
        <div
          className="bg-orange-600 h-full"
          style={{ animation: "progress 3s linear forwards" }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
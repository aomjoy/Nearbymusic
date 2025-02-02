import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMusic, FaUtensils } from "react-icons/fa";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-6xl font-bold mb-4 text-white">Welcome to NearbyMusic</h1>
      <p className="text-2xl text-gray-300 mb-8">Connect musicians with amazing venues</p>
      
      <div className="flex gap-8">
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg text-center w-96">
          <FaMusic className="text-blue-400 text-8xl mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-3">I'm a Musician</h2>
          <p className="text-gray-400 text-xl mb-6">Find gigs at restaurants and venues</p>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-4 rounded-xl transition-all"
            onClick={() => navigate("/MusicianSignup")}
          >
            Join as Musician
          </button>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg text-center w-96">
          <FaUtensils className="text-blue-400 text-8xl mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-3">I'm a Restaurant</h2>
          <p className="text-gray-400 text-xl mb-6">Find talented musicians for your venue</p>
          <button
            className="w-full bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-4 rounded-xl transition-all"
            onClick={() => navigate("/RestaurantSignup")}
          >
            Join as Restaurant
          </button>
        </div>
      </div>

      <button 
        onClick={() => navigate("/login")}
        className="mt-8 text-gray-400 hover:text-white text-xl flex items-center gap-2">
        ➜ Already have an account? Log in
      </button>
    </div>
  );
};

export default Main;
import React from 'react';
import catImage from '../assets/cat.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-12">
        
        <img
          src={catImage}
          alt="Cat"
          className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0"
        />
        
        <div className="flex flex-col items-start justify-center gap-4 text-left md:text-left pr-4 md:pr-8">
          <h1 className="text-[#ff6600] text-3xl md:text-5xl font-extrabold font-baloo mb-4">
            ¡Bienvenido a AI Explorers!
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Aprende sobre inteligencia artificial jugando y explorando.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-8 py-3 bg-[#ffcc00] text-[#333] rounded-xl text-lg font-semibold transform transition-transform duration-200 hover:scale-105 shadow-inset-custom">
              <Link to={"chat"}>
                Explora
              </Link>
            </button>
            <button className="px-6 py-3 bg-[#ffcc00] text-[#333] rounded-xl text-lg font-semibold transform transition-transform duration-200 hover:scale-105 shadow-inset-custom">
              <Link to={"game"}>
                Juega Ahora
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

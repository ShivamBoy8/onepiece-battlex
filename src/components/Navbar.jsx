// Navbar.jsx
import React from 'react';
import logo from "../assets/logo/battlex.png";

const Navbar = ({ toggleMute, muted }) => {
  return (
    <div className='fixed top-0 right-0 w-full bg-[#0a101c] border-b-2 border-[#e2c25e] shadow-lg shadow-[#e2c25e]/15 z-50'>
      <div className='flex justify-between items-center px-4 sm:px-8 py-3'>
        
        <img
          src={logo}
          alt="One Piece BattleX"
          className='h-12 sm:h-14 md:h-18 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300'
        />

        {/* mute button — right side, vertically centered with logo */}
        <button
          onClick={toggleMute}
          className="bg-[#0a101c] border border-[#e2c25e] 
                     rounded-full w-10 h-10 flex items-center justify-center 
                     text-lg hover:scale-110 transition-transform"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? "🔇" : "🔊"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;
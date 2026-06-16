import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/logo/battlex1.png";

const Navbar = ({ toggleMute, muted }) => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const isGame    = location.pathname === '/game';
  const isCards   = location.pathname === '/cards';
  const ishome=location.pathname==='/';

  return (
    <div className='fixed top-0 w-full bg-[#0a101c] border-b-2 border-[#e2c25e] shadow-lg shadow-[#e2c25e]/15 z-50'>
      <div className='flex justify-between items-center px-4 sm:px-8 py-3'>

        {/* logo → always goes home */}
        <img
          src={logo}
          alt="One Piece BattleX"
          onClick={() => navigate('/')}
          className='h-12 sm:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300'
        />

        <div className="flex items-center gap-3">

          {/* toggle button — flips between /game and /cards */}
          {isGame && (
            <button
              onClick={() => navigate('/cards')}
              className="border border-[#e2c25e] text-[#e2c25e] rounded-full px-4 py-2 text-sm font-bold hover:bg-[#e2c25e] hover:text-[#0a101c] transition-all"
            >
              📋 Cards
            </button>
          )}

          {(isCards || ishome) && (
            <button
              onClick={() => navigate('/game')}
              className="border border-[#e2c25e] text-[#e2c25e] rounded-full px-4 py-2 text-sm font-bold hover:bg-[#e2c25e] hover:text-[#0a101c] transition-all"
            >
              ⚔️ Play Game
            </button>
          )}

          {/* mute — only on game page */}
          {isGame && (
            <button
              onClick={toggleMute}
              className="bg-[#0a101c] border border-[#e2c25e] rounded-full w-10 h-10 flex items-center justify-center text-lg hover:scale-110 transition-transform"
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
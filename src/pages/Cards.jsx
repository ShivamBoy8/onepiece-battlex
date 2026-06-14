import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { CHARACTERS, POWER_CARDS } from '../characterData/data';
import Navbar from '../components/Navbar';

const specialCards = POWER_CARDS.filter(c => c.rarity === 'special');
const regularCards = POWER_CARDS.filter(c => c.rarity !== 'special');

export default function Cards() {
  const [activeTab, setActiveTab] = useState('characters');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#080f18] text-white">

      {/* header */}
      <Navbar/>
        <div className="pt-20 sm:pt-22">
            {/* tabs */}
      <div className="flex border-b border-[#e2c25e]/20 ">
        {[
          { key: 'characters', label: '🏴‍☠️ Characters', count: CHARACTERS.length },
          { key: 'powercards', label: '⚡ Power Cards', count: POWER_CARDS.length },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-4 text-xl font-semibold tracking-wider transition-all
              ${activeTab === tab.key
                ? 'text-[#e2c25e] border-b-2 border-[#e2c25e] bg-[#e2c25e]/5'
                : 'text-gray-500 hover:text-gray-300'
              }`}
          >
            {tab.label}
            <span className={`ml-2 text-sm px-2 py-0.5 rounded-full
              ${activeTab === tab.key
                ? 'bg-[#e2c25e]/20 text-[#e2c25e]'
                : 'bg-white/5 text-gray-500'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* content */}
      <div className="p-6">

        {/* characters tab */}
        {activeTab === 'characters' && (
          <>
            <h2 className="text-2xl font-bold text-[#929292] mb-6 ">
              🏴‍☠️ ALL CHARACTERS ({CHARACTERS.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {CHARACTERS.map(char => (
                <Card
                  key={char.id}
                  image={char.image}
                  name={char.name}
                  desc={char.desc}
                  type={char.type}
                  str={char.str}
                  haki={char.haki}
                  df={char.df}
                  spd={char.spd}
                  stam={char.stam}
                  mind={char.mind}
                  powerCard={char.powerCard}
                />
              ))}
            </div>
          </>
        )}

        {/* power cards tab */}
        {activeTab === 'powercards' && (
          <>
            {/* special section */}
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-2 tracking-widest text-[#ad502f]"
                >
                🔥 SPECIAL CARDS ({specialCards.length})
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                These cards have unique game-changing abilities beyond just points.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {specialCards.map(card => (
                  <Card
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    desc={card.desc}
                    type={card.type}
                    flatBonus={card.flatBonus}
                    synergyWith={card.synergyWith}
                    synergyBonus={card.synergyBonus}
                    synergyDesc={card.synergyDesc}
                  />
                ))}
              </div>
            </div>

            {/* divider */}
            <div className="border-t border-[#e2c25e]/20 mb-10" />

            {/* regular power cards */}
            <div>
              <h2 className="text-2xl font-black text-[#e2c25e] mb-2 tracking-widest">
                ⚡ POWER CARDS ({regularCards.length})
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Flat bonus and synergy cards — stack them with the right crew.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {regularCards.map(card => (
                  <Card
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    desc={card.desc}
                    type={card.type}
                    flatBonus={card.flatBonus}
                    synergyWith={card.synergyWith}
                    synergyBonus={card.synergyBonus}
                    synergyDesc={card.synergyDesc}
                  />
                ))}
              </div>
            </div>
          </>
        )}

      </div>
        </div>
      
    </div>
  );
}
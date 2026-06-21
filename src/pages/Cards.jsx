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

  // NEW: tracks which special card's effect image is currently expanded (by id), null = none expanded
  const [expandedCardId, setExpandedCardId] = useState(null);

  return (
    <div className="min-h-screen w-full bg-[#080f18] text-white">
      <Navbar/>
        <div style={{ paddingTop: '80px' }}>

      <div className="flex border-b border-[#e2c25e]/20 ">
        {[
          { key: 'characters', label: '🏴‍☠️ Characters', count: CHARACTERS.length },
          { key: 'powercards', label: '⚡ Power Cards', count: POWER_CARDS.length },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-4 text-xl font-semibold tracking-wider transition-all cursor-pointer
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

      <div className="p-6">

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

        {activeTab === 'powercards' && (
          <>
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-2 tracking-widest text-[#ad502f]">
                🔥 SPECIAL CARDS ({specialCards.length})
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                These cards have unique game-changing abilities beyond just points.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {specialCards.map(card => {
                  const isExpanded = expandedCardId === card.id;

                  return (
                    // NEW: one shared golden border wraps both card + hover image
                    <div
                      key={card.id}
                      className="rounded-xl border-2 border-[#e2c25e] p-1 sm:p-2 flex flex-col gap-2 bg-[#0c1623]"
                    >
                      <Card
                        image={card.image}
                        name={card.name}
                        type={card.type}
                        flatBonus={card.flatBonus}
                        synergyWith={card.synergyWith}
                        synergyBonus={card.synergyBonus}
                    
                      />

                      {card.hoverimage && (
                        <div
                          className="rounded-lg border border-[#ad502f]/40 overflow-hidden cursor-pointer"
                          onClick={() => setExpandedCardId(isExpanded ? null : card.id)}
                        >
                          <img
                            src={card.hoverimage}
                            alt={`${card.name} effect`}
                            className="w-full object-cover hover:opacity-90 transition-opacity"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#e2c25e]/20 mb-10" />

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

      {/* NEW: full-screen expanded view, renders once at the bottom, shows whichever card is expanded */}
      {expandedCardId && (() => {
        const expandedCard = specialCards.find(c => c.id === expandedCardId);
        if (!expandedCard) return null;

        return (
          <div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setExpandedCardId(null)} // click anywhere on the dark backdrop closes it
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // prevent backdrop click from firing when clicking the image itself
            >
              <button
                onClick={() => setExpandedCardId(null)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#e2c25e] text-[#0a101c] font-bold text-lg hover:scale-110 transition-transform"
              >
                ✕
              </button>
              <img
                src={expandedCard.hoverimage}
                alt={`${expandedCard.name} effect — expanded`}
                className="w-full rounded-xl border-2 border-[#e2c25e] shadow-[0_0_40px_rgba(226,194,94,0.3)]"
              />
            </div>
          </div>
        );
      })()}

    </div>
  );
}
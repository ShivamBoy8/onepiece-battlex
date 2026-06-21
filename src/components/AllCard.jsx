import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import { CHARACTERS, POWER_CARDS } from "../characterData/data";


export default function AllCard({ onCardSelect, pickTurn, round,usedCardIds = [] }) {

const activePowerCards = useMemo(() => {
  const randomCount = Math.floor(Math.random() * POWER_CARDS.length) + 1;
  const shuffled = [...POWER_CARDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, randomCount);
}, [round]);
  
  const allCards = [...CHARACTERS, ...activePowerCards];
  const availableCards = allCards.filter(card => !usedCardIds.includes(card.id));
  const [sixCards, setSixCards] = useState([]);

  const generateRandomCards = () => {
    const cardCopy = [...availableCards];
    for (let i = cardCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardCopy[i], cardCopy[j]] = [cardCopy[j], cardCopy[i]];
    }
    return cardCopy.slice(0, 6);
  };

  const refreshCards = () => {
    setSixCards(generateRandomCards());
  };

  useEffect(() => {
    refreshCards();
  }, [round]);

  const handleCardClick = (card) => {
    if (!pickTurn) return;
    onCardSelect(card, true);
  };

  useEffect(() => {
    if (!pickTurn && sixCards.length > 0) {
      const timer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sixCards.length);
        const computerCard = sixCards[randomIndex];
        onCardSelect(computerCard, false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [pickTurn, sixCards]);

  return (
    <div className="w-full p-8 bg-slate-950 text-white ">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {sixCards.map((card) => (
          <div 
            key={card.id} 
            className={`${pickTurn ? 'cursor-pointer hover:scale-105 transition-transform' : 'opacity-60 cursor-not-allowed'}`}
            onClick={() => handleCardClick(card)} 
          >
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
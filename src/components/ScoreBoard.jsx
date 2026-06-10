import React from 'react'

import vs from "../assets/logo/vs.png";
import WinnerModal from "./WinnerModal";
import Crew from './Crew';

const ScoreBoard = ({humanTeam,humanScore,pickTurn,computerTeam,computerScore,round}) => {
  return (
    <div className="pt-25 sm:pt-32 md:pt-37 px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">

          <Crew
            colour="#081412"
            textcolor="#51a465"
            team={humanTeam}
            score={humanScore}
            isActive={pickTurn}
          />

          <div className="flex flex-col items-center gap-1">
            <img
              src={vs}
              alt="VS"
              className="w-12 h-12 sm:w-20 sm:h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="bg-[#0a101c] border border-[#e2c25e] rounded-full px-3 py-1 shadow-lg">
              <span className="text-[#e2c25e] font-semibold text-sm">
                Round <span className="text-white text-sm">{round}</span>/5
              </span>
            </div>
          </div>

          <Crew
            colour="#141210"
            textcolor="#9b7540"
            team={computerTeam}
            score={computerScore}
            isActive={!pickTurn}
          />

        </div>
      </div>
  )
}

export default ScoreBoard

// Crew.jsx
import React from "react";

const Crew = ({ colour, textcolor, team = [], score = 0,isActive }) => {
  const maxMembers = 5;
  const memberSlots = Array(maxMembers).fill(null);
  
  team.forEach((member, index) => {
    if (index < maxMembers) {
      memberSlots[index] = member;
    }
  });

  return (
    <div
     className={`w-full rounded-xl border-2 p-2 sm:p-3 md:p-4 transition-all duration-300
        ${isActive ? 'animate-pulse shadow-lg' : ''}
      `}
      style={{
        backgroundColor: colour,
        borderColor: textcolor,
        boxShadow: isActive ? `0 0 10px ${textcolor}` : 'none',
      }}
    >
      {/* Score Header */}
     <div className="relative text-center mb-2 sm:mb-3 flex items-center justify-center">
        {/* Score - Centered */}
       <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#e2c25e]">
        {score} pts
       </div>
  
        {/* Members Count - Absolute positioned at right */}
         <div className="hidden md:block absolute right-0 text-xs sm:text-sm opacity-80" style={{ color: textcolor }}>
    {team.length}/{maxMembers}
  </div>
      </div>

      {/* Desktop View (>=800px) - Shows Images */}
      <div className="hidden min-[200px]:grid grid-cols-5 gap-1 sm:gap-2 md:gap-3 place-items-center">
        {memberSlots.map((member, index) => (
          <div
            key={index}
            className={`
              w-full aspect-square rounded-lg border-2 overflow-hidden
              transition-all duration-300 hover:scale-105
              ${member ? 'opacity-100' : 'opacity-40 bg-black/30'}
            `}
            style={{
              borderColor: textcolor,
              boxShadow: member ? `0 0 8px ${textcolor}80` : 'none',
            }}
          >
            {member ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base opacity-50">?</span>
              </div>
            )}
          </div>
        ))}
      </div>


       {/* Desktop View (>=800px) - single row */}
       <div className="hidden min-[800px]:grid grid-cols-5 gap-1 mt-1 text-center text-sm lg:text-md truncate">
         {memberSlots.map((member, index) => (
           <div key={index} className="opacity-70 truncate text-[#cacaca]" >
             {member ? member.name.split(" ")[0] : "---"}
           </div>
         ))}
       </div> 
    </div>
  );
};

export default Crew;
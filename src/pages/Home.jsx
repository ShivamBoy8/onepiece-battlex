import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// ── Floating ember particle ───────────────────────────────────
const Ember = ({ style }) => (
  <div className="ember" style={style} />
);

export default function Home() {
  const navigate = useNavigate();
  const [embers, setEmbers] = useState([]);
  const [visible, setVisible] = useState(false);

  // generate floating embers for atmosphere
  useEffect(() => {
    const list = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left:     `${Math.random() * 100}%`,
      animDur:  `${4 + Math.random() * 6}s`,
      animDel:  `${Math.random() * 5}s`,
      size:     `${2 + Math.random() * 3}px`,
      opacity:  0.3 + Math.random() * 0.5,
    }));
    setEmbers(list);
    // fade in page
    setTimeout(() => setVisible(true), 100);
  }, []);

  const SPECIAL_CARDS = [
    { name: "Ope Ope ROOM",       icon: "💉", effect: "Swap your weakest card with a random enemy card" },
    { name: "Dark Gravity Pull",  icon: "🌑", effect: "Drain 15% of enemy total score instantly" },
    { name: "Soul King Concert",  icon: "🎸", effect: "Enemy loses their entire next pick turn" },
    { name: "Soul Pocus",         icon: "👻", effect: "Enemy score bleeds −2% every 2 seconds" },
    { name: "SAD Gas Cloud",      icon: "☠️", effect: "Drain 5% per card the enemy currently holds" },
    { name: "Franky's Cola",      icon: "🤖", effect: "Vaporize the weakest card in the enemy crew" },
    { name: "Yonko Alliance Pact",icon: "🤝", effect: "+210 bounty when 2+ Emperors sail together" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700&family=Exo+2:wght@300;400;600;700&display=swap');

        .home-root, .home-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          min-height: 100vh;
          background: #04080f;
          color: #e8e0d0;
          font-family: 'Exo 2', sans-serif;
          overflow-x: hidden;
        }

        /* ── ember particles ── */
        .ember {
          position: fixed;
          bottom: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, #e2c25e, #ff6600 60%, transparent);
          pointer-events: none;
          animation: floatEmber linear infinite;
          z-index: 0;
        }
        @keyframes floatEmber {
          0%   { transform: translateY(0) translateX(0) scale(1);   opacity: var(--op); }
          50%  { transform: translateY(-45vh) translateX(20px) scale(0.7); }
          100% { transform: translateY(-100vh) translateX(-10px) scale(0.3); opacity: 0; }
        }

        /* ── page fade ── */
        .page-fade {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .page-fade.in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── hero ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 60px;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%,   #1a0a00 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%,  #001a2e 0%, transparent 60%),
            #04080f;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg,   transparent, transparent 80px, rgba(226,194,94,0.025) 81px),
            repeating-linear-gradient(90deg,  transparent, transparent 80px, rgba(226,194,94,0.025) 81px);
          pointer-events: none;
        }

        .hero-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: #e2c25e;
          opacity: 0.7;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(2.4rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0.04em;
          color: #e2c25e;
          text-shadow:
            0 0 60px rgba(226,194,94,0.4),
            0 0 120px rgba(226,194,94,0.15);
          margin-bottom: 8px;
        }

        .hero-sub {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(1rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #ff4500;
          letter-spacing: 0.2em;
          margin-bottom: 28px;
          text-shadow: 0 0 30px rgba(255,69,0,0.5);
        }

        .hero-quote {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.85rem, 2vw, 1.1rem);
          font-style: italic;
          color: rgba(232,224,208,0.55);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .hero-quote span {
          display: block;
          font-style: normal;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: rgba(226,194,94,0.4);
          margin-top: 10px;
          text-transform: uppercase;
        }

        /* ── CTA buttons ── */
        .cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.15em;
          padding: 16px 40px;
          border-radius: 60px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #e2c25e, #c8a430);
          color: #04080f;
          box-shadow: 0 0 30px rgba(226,194,94,0.35), 0 8px 24px rgba(0,0,0,0.5);
          transition: transform 0.15s, box-shadow 0.15s;
          position: relative;
          z-index: 1;
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 0 50px rgba(226,194,94,0.55), 0 12px 32px rgba(0,0,0,0.6);
        }
        .btn-primary:active { transform: scale(0.97); }

        .btn-secondary {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.15em;
          padding: 16px 36px;
          border-radius: 60px;
          border: 1px solid rgba(226,194,94,0.4);
          background: transparent;
          color: rgba(226,194,94,0.8);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          z-index: 1;
        }
        .btn-secondary:hover {
          border-color: #e2c25e;
          color: #e2c25e;
          background: rgba(226,194,94,0.07);
        }

        /* ── scroll hint ── */
        .scroll-hint {
  position: absolute;
  bottom: 12px;          /* moved closer to actual bottom edge */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0.35;
  animation: bob 2s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;  /* ADD THIS — critical fix */
}
        @keyframes bob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
        .scroll-hint span {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          font-family: 'Cinzel', serif;
          color: #e2c25e;
          text-transform: uppercase;
        }

        /* ── sections ── */
        .section {
          position: relative;
          z-index: 1;
          padding: 80px 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        .section-label {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: #e2c25e;
          opacity: 0.5;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          font-weight: 700;
          color: #e2c25e;
          margin-bottom: 32px;
          letter-spacing: 0.05em;
        }

        /* ── divider ── */
        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(226,194,94,0.3), transparent);
          margin: 0;
        }

        /* ── how to play steps ── */
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .step-card {
          background: linear-gradient(145deg, #0a1220, #060d18);
          border: 1px solid rgba(226,194,94,0.12);
          border-radius: 20px;
          padding: 28px 22px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .step-card:hover {
          border-color: rgba(226,194,94,0.35);
          transform: translateY(-4px);
        }

        .step-num {
          font-family: 'Cinzel Decorative', serif;
          font-size: 2.5rem;
          font-weight: 900;
          color: rgba(226,194,94,0.12);
          line-height: 1;
          margin-bottom: 12px;
        }

        .step-title {
          font-family: 'Cinzel', serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #e2c25e;
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }

        .step-desc {
          font-size: 0.82rem;
          color: rgba(232,224,208,0.5);
          line-height: 1.7;
        }

        /* ── special cards ── */
        .special-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 14px;
        }

        .special-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: linear-gradient(135deg, #0e0500, #0a0a00);
          border: 1px solid rgba(255,69,0,0.2);
          border-radius: 14px;
          padding: 16px 18px;
          transition: border-color 0.2s;
        }
        .special-item:hover {
          border-color: rgba(255,69,0,0.5);
        }

        .special-icon {
          font-size: 1.6rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .special-name {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 4px;
          letter-spacing: 0.03em;
        }

        .special-effect {
          font-size: 0.75rem;
          color: rgba(232,224,208,0.45);
          line-height: 1.5;
        }

        /* ── final CTA ── */
        .final-cta {
          position: relative;
          text-align: center;
          padding: 100px 24px;
          background:
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(226,194,94,0.06) 0%, transparent 70%);
        }

        .final-cta-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #e2c25e;
          margin-bottom: 16px;
          text-shadow: 0 0 40px rgba(226,194,94,0.3);
        }

        .final-cta-sub {
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          color: rgba(232,224,208,0.35);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .footer-line {
          text-align: center;
          padding: 32px 24px;
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          color: rgba(226,194,94,0.2);
          text-transform: uppercase;
          border-top: 1px solid rgba(226,194,94,0.08);
        }

        @media (max-width: 480px) {
          .steps { grid-template-columns: 1fr; }
          .special-grid { grid-template-columns: 1fr; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .cta-group { flex-direction: column; align-items: center; }
        }
      `}</style>
  <Navbar/>
      <div className="home-root">
      
        {/* ember atmosphere */}
        {embers.map(e => (
          <Ember key={e.id} style={{
            left: e.left,
            width: e.size,
            height: e.size,
            '--op': e.opacity,
            animationDuration: e.animDur,
            animationDelay: e.animDel,
          }} />
        ))}

         

        {/* ── HERO ── */}
        <div className={`hero page-fade ${visible ? 'in' : ''}`}>
          <p className="hero-eyebrow">⚓ The New World Awaits</p>
          <h1 className="hero-title">BATTLEX</h1>
          <p className="hero-sub">ONE PIECE</p>
          <p className="hero-quote">
            "Inherited will, the destiny of the age, and the dreams of its people.
            These are things that will not be stopped."
            <span>— Whitebeard, Paramount War</span>
          </p>

          {/* ── PLAY BUTTON — always first, always prominent ── */}
          <div className="cta-group">
            <button className="btn-primary" onClick={() => navigate('/game')}>
              ⚔️ SET SAIL NOW
            </button>
            <button className="btn-secondary" onClick={() => navigate('/cards')}>
              📋 View All Cards
            </button>
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="6" y="2" width="4" height="8" rx="2" fill="rgba(226,194,94,0.5)"/>
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(226,194,94,0.3)" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        <div className="divider" />

        {/* ── WHAT IS BATTLEX ── */}
        <div className="section">
          <p className="section-label">The Game</p>
          <h2 className="section-title">Build your crew. Win the Grand Line.</h2>
          <p style={{ color:'rgba(232,224,208,0.55)', lineHeight:1.9, fontSize:'1rem', maxWidth:680 }}>
            BattleX is a One Piece card drafting battle. You and the computer take turns 
            choosing from a shuffled deck of characters and power cards across 5 rounds. 
            Every pick matters — characters carry raw stats, power cards unleash synergy 
            bonuses, and Special cards flip the entire battlefield in a single move.
            The crew with the highest total bounty after 5 rounds claims the seas.
          </p>
        </div>

        <div className="divider" />

        {/* ── HOW TO PLAY ── */}
        <div className="section">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Four rounds. One winner.</h2>
          <div className="steps">
            {[
              { n:"I",   title:"The Draft",    desc:"6 cards appear each round. You pick one, the computer picks one. 5 rounds, 5 cards per crew." },
              { n:"II",  title:"Synergy",      desc:"Power cards multiply when the right character is already in your crew. Build around a theme." },
              { n:"III", title:"Special Moves",desc:"Cards like Law's ROOM, Brook's Paralysis, and Franky's Beam change the game — not just the score." },
              { n:"IV",  title:"Highest Bounty Wins", desc:"When the last card is picked, bounties are tallied. The stronger crew rules the New World." },
            ].map(s => (
              <div className="step-card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* ── SPECIAL CARDS ── */}
        <div className="section">
          <p className="section-label" style={{ color:'#ff4500', opacity:1 }}>🔥 Special Cards</p>
          <h2 className="section-title" style={{ color:'#ff6b35' }}>
            These don't just score — they strike.
          </h2>
          <p style={{ color:'rgba(232,224,208,0.4)', marginBottom:28, fontSize:'0.85rem', lineHeight:1.7 }}>
            Special rarity cards carry abilities straight from the One Piece universe.
            They can steal cards, drain scores, destroy crew members, or freeze time itself.
          </p>
          <div className="special-grid">
            {SPECIAL_CARDS.map(c => (
              <div className="special-item" key={c.name}>
                <span className="special-icon">{c.icon}</span>
                <div>
                  <div className="special-name">{c.name}</div>
                  <div className="special-effect">{c.effect}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* ── FINAL CTA ── */}
        <div className="final-cta">
          <h2 className="final-cta-title">The One Piece is Real.</h2>
          <p className="final-cta-sub">Your crew is waiting, Captain.</p>
          <div className="cta-group" style={{ justifyContent:'center' }}>
            <button className="btn-primary" onClick={() => navigate('/game')}>
              ⚔️ Start Battle
            </button>
            <button className="btn-secondary" onClick={() => navigate('/cards')}>
              📋 Browse Cards
            </button>
          </div>
        </div>

        <div className="footer-line">
          One Piece BattleX — Fan-made card game · Not affiliated with Toei Animation
        </div>

      </div>
    </>
  );
}
import React, { useState, useEffect } from 'react';

const ASCIIComputerAnimation = () => {
  const [frame, setFrame] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const messages = [
    '> INITIALIZING SYSTEM...',
    '> LOADING PORTFOLIO...',
    '> WELCOME USER_',
    '> READY TO INNOVATE_',
    '> BUILDING THE FUTURE_',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 60);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  const blinkCursor = frame % 10 < 5 ? '█' : ' ';
  const loadingBar = '█'.repeat(Math.floor((frame % 20) / 2)) + '░'.repeat(10 - Math.floor((frame % 20) / 2));
  const currentMessage = messages[textIndex];

  // Status indicators
  const pwrStatus = frame % 20 < 10 ? '●' : '○';
  const hddStatus = frame % 15 < 7 ? '●' : '○';
  const netStatus = frame % 10 < 5 ? '●' : '○';

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative font-mono leading-tight whitespace-pre select-none">
        <style>{`
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.96; }
          }
          @keyframes glow-pulse {
            0%, 100% { 
              filter: brightness(1) drop-shadow(0 0 3px rgba(34, 197, 94, 0.5));
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.15), inset 0 0 20px rgba(34, 197, 94, 0.05);
            }
            50% { 
              filter: brightness(1.1) drop-shadow(0 0 6px rgba(34, 197, 94, 0.7));
              box-shadow: 0 0 30px rgba(34, 197, 94, 0.25), inset 0 0 30px rgba(34, 197, 94, 0.08);
            }
          }
          @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .ascii-container {
            animation: flicker 0.15s infinite, glow-pulse 3s ease-in-out infinite;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(34, 197, 94, 0.3);
            border-radius: 8px;
          }
          .scanline-effect {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(transparent, rgba(34, 197, 94, 0.3), transparent);
            animation: scanline 4s linear infinite;
            pointer-events: none;
          }
          .screen-text {
            text-shadow: 0 0 10px rgba(34, 197, 94, 0.8),
                         0 0 20px rgba(34, 197, 94, 0.4);
          }
          .status-indicator {
            animation: glow-pulse 2s ease-in-out infinite;
          }
          @media (max-width: 640px) {
            .ascii-art {
              font-size: 0.5rem;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .ascii-art {
              font-size: 0.65rem;
            }
          }
          @media (min-width: 1025px) {
            .ascii-art {
              font-size: 0.75rem;
            }
          }
        `}</style>
        
        <div className="ascii-container relative p-6 overflow-hidden">
          <div className="scanline-effect"></div>
          
          <div className="relative z-10 text-green-500 screen-text ascii-art">
{`╔═══════════════════════════════════════╗
║  ┌─────────────────────────────────┐  ║
║  │                                 │  ║
║  │  ${currentMessage.padEnd(29)}│  ║
║  │                                 │  ║
║  │  [${loadingBar}]           │  ║
║  │                                 │  ║
║  │  ${blinkCursor}                            │  ║
║  └─────────────────────────────────┘  ║
║                                       ║
║   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ║
║                                       ║
║    [PWR] [HDD] [NET]                 ║
║     ${pwrStatus}     ${hddStatus}     ${netStatus}                   ║
╚═══════════════════════════════════════╝`}
          </div>
        </div>

        <div className="mt-3 text-center text-xs text-green-500/70 screen-text">
          {`[ SYS-${String(frame).padStart(4, '0')} ]`}
        </div>
      </div>
    </div>
  );
};

export default ASCIIComputerAnimation;

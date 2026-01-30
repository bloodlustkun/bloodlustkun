import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setIsGlitching(true);
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
        const glitched = text
          .split('')
          .map((char) => 
            Math.random() > 0.7 
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join('');
        setDisplayText(glitched);

        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 50);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <span className={`glitch-text ${isGlitching ? 'glitching' : ''}`}>
        {displayText}
      </span>
    </div>
  );
}

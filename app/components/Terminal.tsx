import { useState, useEffect } from 'react';

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    '> Initializing connection...',
    '> Loading developer profile...',
    '> Scanning capabilities... [████████████] 100%',
    '> Full Stack Developer detected',
    '> Status: READY FOR ANYTHING',
    '> Type "help" for available commands',
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, terminalLines[currentLine]]);
        setCurrentLine(currentLine + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="border border-green-400 bg-black/80 p-4 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-400 text-sm">terminal@localhost:~$</div>
      </div>
      <div className="space-y-2 min-h-[140px]">
        {lines.map((line, index) => (
          <div key={index} className="text-green-300 text-sm animate-[fadeIn_0.3s_ease-in]">
            {line}
          </div>
        ))}
        {currentLine < terminalLines.length && (
          <div className="text-green-300 text-sm">
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}

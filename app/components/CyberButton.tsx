interface CyberButtonProps {
  href: string;
  text: string;
  variant?: 'green' | 'cyan' | 'purple' | 'red';
}

export function CyberButton({ href, text, variant = 'green' }: CyberButtonProps) {
  const getColorClass = () => {
    const colorMap = {
      green: 'border-green-400 text-green-400 hover:bg-green-400/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]',
      cyan: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]',
      purple: 'border-purple-400 text-purple-400 hover:bg-purple-400/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
      red: 'border-red-400 text-red-400 hover:bg-red-400/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]',
    };
    return colorMap[variant];
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block px-6 py-2 border-2 font-bold
        transition-all duration-200 relative
        ${getColorClass()}
      `}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 hover:opacity-10 transition-opacity"></div>
    </a>
  );
}

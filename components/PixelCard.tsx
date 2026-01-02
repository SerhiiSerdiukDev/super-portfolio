import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'brick' | 'question' | 'pipe' | 'cloud' | 'default';
  onClick?: () => void;
}

const PixelCard: React.FC<PixelCardProps> = ({ children, className = '', variant = 'default', onClick }) => {
  let bgClass = 'bg-white';
  let borderClass = 'border-4 border-black';
  
  if (variant === 'brick') {
    bgClass = 'bg-[#c84c0c] text-white';
  } else if (variant === 'question') {
    bgClass = 'bg-[#fc9838]';
  } else if (variant === 'pipe') {
    bgClass = 'bg-[#00aa00] text-white';
  } else if (variant === 'cloud') {
    bgClass = 'bg-white rounded-xl';
    borderClass = 'border-4 border-black';
  }

  return (
    <div 
      onClick={onClick}
      className={`
        relative ${bgClass} ${borderClass} p-6 pixel-shadow
        transition-transform duration-150 active:translate-y-1 active:translate-x-1 active:shadow-none
        ${className}
      `}
    >
      {/* Corner accents for rounded pixel look */}
      {variant !== 'cloud' && (
        <>
          <div className="absolute -top-1 -left-1 w-1 h-1 bg-white" />
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-white" />
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white" />
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white" />
        </>
      )}
      {children}
    </div>
  );
};

export default PixelCard;
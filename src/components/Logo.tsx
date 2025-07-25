import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LangContext';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'medium', showText = true }: LogoProps) {
  const { theme } = useTheme();
  const { lang } = useLang();
  
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  const logoText = 'Soleva';
  const slogan = lang === 'ar' ? 'صُنع للحركة' : 'Made to Move';

  if (!showText) {
    return (
      <Link to="/" className={`flex items-center ${className}`}>
        <div className={`font-bold text-[#d1b16a] ${sizeClasses[size]} tracking-wider`}>
          {logoText}
        </div>
      </Link>
    );
  }

  return (
    <Link to="/" className={`flex flex-col items-center ${className}`}>
      <div className={`font-bold text-[#d1b16a] ${sizeClasses[size]} tracking-wider mb-1`}>
        {logoText}
      </div>
      {size !== 'small' && (
        <div className="text-xs text-gray-600 font-medium tracking-wide">
          {slogan}
        </div>
      )}
    </Link>
  );
}
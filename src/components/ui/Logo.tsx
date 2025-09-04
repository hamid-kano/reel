import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', size = 'md', variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <img 
      src={variant === 'dark' ? '/assets/images/logo-dark.svg' : '/assets/images/logo.svg'}
      alt="Reel Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}
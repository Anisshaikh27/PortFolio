// src/components/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '', 
  to,          // For internal React Router navigation
  href,        // For external links
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-jetbrains font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block text-center cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-lg",
    secondary: "border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:shadow-lg",
    accent: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg",
    dark: "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 shadow-lg"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const finalClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  // Internal Link (React Router)
  if (to) {
    return (
      <Link 
        to={to}
        className={finalClassName}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // External Link
  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Regular Button
  return (
    <button 
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

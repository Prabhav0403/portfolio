import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  href,
  className = "",
  onClick,
  ...props 
}) => {
  // Industrial design: No rounded corners, uppercase mono text, specific borders
  const baseStyles = "inline-flex items-center justify-center px-10 py-5 text-sm font-mono uppercase tracking-widest transition-all duration-200 border border-transparent select-none cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-canvas hover:bg-white border-primary",
    secondary: "bg-border text-primary hover:bg-neutral-800",
    outline: "bg-transparent text-primary border-border hover:border-primary hover:bg-white/5",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-5 h-5 ml-3" />}
    </>
  );

  // Handle internal hash links with smooth scrolling
  if (href) {
    const isInternal = href.startsWith('#');
    
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isInternal) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (onClick) onClick(e as any);
    };

    return (
      <a 
        href={href} 
        onClick={handleLinkClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
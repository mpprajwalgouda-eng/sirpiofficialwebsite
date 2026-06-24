import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  img: string;
  title: string;
  description?: string;
  tag?: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
  /** Card height — default h-72 */
  height?: string;
  /** Gradient strength — 'light' | 'medium' | 'strong' */
  gradient?: 'light' | 'medium' | 'strong';
  children?: React.ReactNode;
}

const gradientMap = {
  light:  'from-black/60 via-black/20 to-transparent',
  medium: 'from-black/75 via-black/30 to-transparent',
  strong: 'from-black/90 via-black/50 to-black/10',
};

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  tag,
  icon,
  link,
  className = '',
  height = 'h-72',
  gradient = 'medium',
  children,
}) => {
  const inner = (
    <div className={`relative group overflow-hidden ${height} ${className} cursor-pointer`}>
      {/* Background image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientMap[gradient]}`} />

      {/* Tag — top left */}
      {tag && (
        <div className="absolute top-5 left-5 z-10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-[#05325d]/80 backdrop-blur-sm px-3 py-1">
            {tag}
          </span>
        </div>
      )}

      {/* Icon — top right */}
      {icon && (
        <div className="absolute top-5 right-5 z-10 p-2 bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
      )}

      {/* Text — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <h3 className="font-bold text-xl text-white leading-snug tracking-tight mb-1">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{description}</p>
        )}
        {children}
        {link && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6eb4f7] mt-3 group-hover:gap-2.5 transition-all">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{inner}</Link>;
  }
  return inner;
};

export default Card;

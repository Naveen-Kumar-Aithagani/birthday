import React from 'react';
import { motion } from 'framer-motion';

interface MagicalParticlesProps {
  count?: number;
  type?: 'sparkles' | 'hearts' | 'stars' | 'magic';
  className?: string;
}

const MagicalParticles: React.FC<MagicalParticlesProps> = ({ 
  count = 15, 
  type = 'sparkles',
  className = ''
}) => {
  const getParticleEmoji = (particleType: string) => {
    switch (particleType) {
      case 'sparkles': return '✨';
      case 'hearts': return '💖';
      case 'stars': return '⭐';
      case 'magic': return '🪄';
      default: return '✨';
    }
  };

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: getParticleEmoji(type),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: 0,
            y: 20
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0.8, 1, 0],
            rotate: [0, 180, 360],
            y: [-20, -40, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default MagicalParticles; 
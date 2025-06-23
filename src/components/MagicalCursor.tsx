import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorTrail {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const MagicalCursor: React.FC = () => {
  const [trails, setTrails] = useState<CursorTrail[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Don't track on mobile
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newTrail: CursorTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrails(prev => [...prev, newTrail].slice(-10)); // Fewer trails for performance
    };

    // Clean up old trails
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 800));
    }, 100);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      clearInterval(cleanupInterval);
    };
  }, [isMobile]);

  const magicalEmojis = ['✨', '🌟', '💫', '⭐', '🪄', '💎', '🔮'];

  // Don't render cursor effects on mobile
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Custom cursor */}
      <motion.div
        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-sm" />
        <div className="absolute inset-2 bg-yellow-300 rounded-full animate-pulse" />
      </motion.div>

      {/* Trail effects */}
      <AnimatePresence>
        {trails.map((trail, index) => {
          const age = Date.now() - trail.timestamp;
          const opacity = Math.max(0, 1 - age / 1000);
          const scale = Math.max(0.2, 1 - age / 800);
          
          return (
            <motion.div
              key={trail.id}
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ 
                opacity: opacity * 0.6, 
                scale: scale,
                rotate: index * 45 
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-lg select-none"
              style={{
                left: trail.x,
                top: trail.y,
                zIndex: 1000 - index,
              }}
            >
              {magicalEmojis[index % magicalEmojis.length]}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Sparkle bursts on click */}
      <div className="sparkle-container">
        {/* This will be triggered by click events */}
      </div>
    </div>
  );
};

export default MagicalCursor; 
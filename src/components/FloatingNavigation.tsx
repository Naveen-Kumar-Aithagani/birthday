import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  const navItems = React.useMemo(() => [
    { id: 'hero', label: 'Magic Begins', emoji: '✨', section: 'hero' },
    { id: 'invitation', label: 'Invitation', emoji: '📜', section: 'invitation' },
    { id: 'moana', label: 'Nidhi Sree', emoji: '🌊', section: 'moana' },
    { id: 'aladdin', label: 'Thirumala Agam', emoji: '🧞‍♂️', section: 'aladdin' },
    { id: 'gallery', label: 'Gallery', emoji: '📸', section: 'gallery' },
    { id: 'countdown', label: 'Countdown', emoji: '⏰', section: 'countdown' },
    { id: 'rsvp', label: 'RSVP', emoji: '💌', section: 'rsvp' },
  ], []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.section));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  // Helper functions for themed mobile navigation
  const getActiveStyleForItem = (itemId: string) => {
    switch (itemId) {
      case 'moana':
        return 'bg-gradient-to-b from-cyan-400/30 to-blue-500/20 text-cyan-200 scale-110 shadow-lg border border-cyan-400/50';
      case 'aladdin':
        return 'bg-gradient-to-b from-orange-400/30 to-yellow-500/20 text-orange-200 scale-110 shadow-lg border border-orange-400/50';
      case 'gallery':
        return 'bg-gradient-to-b from-pink-400/30 to-purple-500/20 text-pink-200 scale-110 shadow-lg border border-pink-400/50';
      case 'countdown':
        return 'bg-gradient-to-b from-red-400/30 to-red-500/20 text-red-200 scale-110 shadow-lg border border-red-400/50';
      case 'rsvp':
        return 'bg-gradient-to-b from-green-400/30 to-emerald-500/20 text-green-200 scale-110 shadow-lg border border-green-400/50';
      default:
        return 'bg-gradient-to-b from-yellow-400/30 to-orange-500/20 text-yellow-200 scale-110 shadow-lg border border-yellow-400/50';
    }
  };

  const getAnimationForItem = (itemId: string) => {
    switch (itemId) {
      case 'moana':
        return { y: [-2, 2, -2], scale: [1, 1.1, 1] };
      case 'aladdin':
        return { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] };
      case 'gallery':
        return { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] };
      case 'countdown':
        return { scale: [1, 1.3, 1] };
      case 'rsvp':
        return { scale: [1, 1.1, 1], y: [-1, 1, -1] };
      default:
        return { scale: [1, 1.2, 1] };
    }
  };

  const getGlowForItem = (itemId: string) => {
    switch (itemId) {
      case 'moana':
        return 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20';
      case 'aladdin':
        return 'bg-gradient-to-r from-orange-400/20 to-yellow-500/20';
      case 'gallery':
        return 'bg-gradient-to-r from-pink-400/20 to-purple-500/20';
      case 'countdown':
        return 'bg-gradient-to-r from-red-400/20 to-red-500/20';
      case 'rsvp':
        return 'bg-gradient-to-r from-green-400/20 to-emerald-500/20';
      default:
        return 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20';
    }
  };

  const getIndicatorForItem = (itemId: string) => {
    switch (itemId) {
      case 'moana':
        return 'bg-gradient-to-r from-cyan-400 to-blue-500';
      case 'aladdin':
        return 'bg-gradient-to-r from-orange-400 to-yellow-500';
      case 'gallery':
        return 'bg-gradient-to-r from-pink-400 to-purple-500';
      case 'countdown':
        return 'bg-gradient-to-r from-red-400 to-red-500';
      case 'rsvp':
        return 'bg-gradient-to-r from-green-400 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 30px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              🧭
            </motion.span>
          </motion.button>

          {/* Navigation Items */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute left-20 top-0 space-y-3"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all group ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Indicator */}
          <motion.div
            className="absolute -right-2 top-0 w-1 bg-white/20 rounded-full overflow-hidden"
            style={{ height: '56px' }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"
              style={{
                height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      )}

      {/* Enhanced Mobile Bottom Navigation */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-purple-900/98 via-pink-900/98 to-purple-900/98 backdrop-blur-xl border-t-4 border-yellow-400/40 shadow-2xl"
        >
          {/* Magic Progress Bar */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 rounded-full"
            style={{
              width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* First row - Main sections */}
          <div className="grid grid-cols-4 gap-1 p-2 pb-1">
            {navItems.slice(0, 4).map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-b from-yellow-400/30 to-orange-500/20 text-yellow-200 scale-105 shadow-lg border border-yellow-400/50'
                    : 'text-yellow-100/80 hover:bg-white/10 hover:scale-105 border border-transparent'
                }`}
                whileHover={{ scale: activeSection === item.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span 
                  className="text-lg"
                  animate={activeSection === item.id ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  } : { scale: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.span>
                <span className="text-xs font-semibold leading-tight text-center">
                  {item.label.split(' ')[0]}
                </span>
                
                {/* Magical Glow Effect */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Second row - Character & Action sections */}
          <div className="grid grid-cols-3 gap-2 p-2 pt-0">
            {navItems.slice(4).map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? getActiveStyleForItem(item.id).replace('scale-110', 'scale-105').replace('rounded-xl', 'rounded-lg')
                    : 'text-yellow-100/80 hover:bg-white/10 hover:scale-105 border border-transparent'
                }`}
                whileHover={{ scale: activeSection === item.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (index + 4) * 0.1 }}
              >
                <motion.span 
                  className="text-base"
                  animate={activeSection === item.id ? getAnimationForItem(item.id) : { scale: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.span>
                <span className="text-xs font-semibold leading-tight text-center">
                  {item.label}
                </span>
                
                {/* Themed Glow Effect */}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl blur-sm ${getGlowForItem(item.id)}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute -bottom-1 w-6 h-1 rounded-full ${getIndicatorForItem(item.id)}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingNavigation; 
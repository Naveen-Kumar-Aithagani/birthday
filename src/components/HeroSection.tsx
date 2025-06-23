import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MagicalParticles from './MagicalParticles';

const HeroSection: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: number }>>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    // Generate deterministic stars to prevent re-renders
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${(i * 7) % 100}%`,
      top: `${(i * 11) % 100}%`,
      size: `${(i % 3) + 1}px`,
      delay: (i % 10) * 0.2,
    }));
    setStars(newStars);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900"
    >
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Magical Particles */}
      <MagicalParticles count={20} type="sparkles" />
      <MagicalParticles count={10} type="stars" />
      <MagicalParticles count={8} type="magic" />

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-8 right-8 w-16 h-16 bg-yellow-100 rounded-full glow-effect"
      />

      {/* Ocean Waves */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg
          className="wave"
          width="100%"
          height="100%"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-blue-400 opacity-60"
          />
        </svg>
      </div>

      {/* Moana's Boat */}
      <motion.div
        initial={{ x: -200, y: 50 }}
        animate={inView ? { x: 100, y: 0 } : { x: -200, y: 50 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute bottom-32 left-8 floating"
      >
        <div className="w-24 h-16 bg-gradient-to-r from-amber-700 to-amber-600 rounded-b-full relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-amber-800"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-tr-lg"></div>
        </div>
      </motion.div>

      {/* Aladdin's Flying Carpet */}
      <motion.div
        initial={{ x: 300, y: -100 }}
        animate={inView ? { x: -50, y: 50 } : { x: 300, y: -100 }}
        transition={{ duration: 4, delay: 1.5 }}
        className="absolute top-1/4 right-16 floating"
      >
        <div className="w-20 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-700 rounded-full"></div>
          <div className="w-full h-full border-2 border-yellow-300 rounded-lg opacity-80"></div>
        </div>
      </motion.div>

      {/* Genie Lamp */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={inView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -45 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-40 right-20 floating glow-effect"
      >
        <div className="w-12 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-l-full relative">
          <div className="absolute -top-2 right-2 w-4 h-6 bg-yellow-600 rounded-t-full"></div>
          <div className="absolute -right-2 top-1 w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
      </motion.div>

      {/* Moana's Heart of Te Fiti */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute top-1/3 left-20 glow-effect"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full relative">
          <div className="absolute inset-1 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full"></div>
        </div>
      </motion.div>

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          {/* Hero Images Carousel */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 2, type: "spring", delay: 0.3 }}
            className="mb-8 relative"
          >
            {/* Main Hero Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl relative z-10">
              <motion.img
                src="/doussss.jpeg"
                alt="Nidhi Sree & Thirumala Agam"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/duo.jpeg";
                }}
              />
              
              {/* Magical glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-yellow-300"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(255, 215, 0, 0.6)",
                    "0 0 30px rgba(255, 215, 0, 1)",
                    "0 0 15px rgba(255, 215, 0, 0.6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Floating Character Images */}
            {/* Aladdin Images */}
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -15 }}
              animate={inView ? { x: 0, opacity: 1, rotate: 0 } : { x: -100, opacity: 0, rotate: -15 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute -left-8 sm:-left-12 md:-left-16 top-4 sm:top-6 md:top-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 sm:border-3 border-orange-400 shadow-lg floating hidden sm:block"
            >
              <img
                src="/aladdin/aladdd.jpeg"
                alt="Aladdin Adventure"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src.includes('aladdd.jpeg')) {
                    img.src = "/aladdin/alladin .jpeg";
                  } else {
                    img.style.display = 'none';
                  }
                }}
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 15 }}
              animate={inView ? { x: 0, opacity: 1, rotate: 0 } : { x: 100, opacity: 0, rotate: 15 }}
              transition={{ duration: 2, delay: 1.2 }}
              className="absolute -right-8 sm:-right-12 md:-right-16 top-4 sm:top-6 md:top-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 sm:border-3 border-cyan-400 shadow-lg floating hidden sm:block"
              style={{ animationDelay: '1s' }}
            >
              <img
                src="/moana/moaana slide.jpeg"
                alt="Moana Ocean"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/moana/nidhi.jpeg";
                }}
              />
            </motion.div>

            {/* Bottom floating images */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-purple-400 shadow-lg floating hidden md:block"
              style={{ animationDelay: '0.5s' }}
            >
              <img
                src="/aladdin/full aladin.jpeg"
                alt="Prince Aladdin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src.includes('full aladin.jpeg')) {
                    img.src = "/aladdin/alladin .jpeg";
                  } else {
                    img.style.display = 'none';
                  }
                }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 2, delay: 1.7 }}
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-emerald-400 shadow-lg floating hidden md:block"
              style={{ animationDelay: '1.5s' }}
            >
              <img
                src="/moana/moaana slide.jpeg"
                alt="Moana's Journey"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/moana/nidhi.jpeg";
                }}
              />
            </motion.div>

            {/* Sparkle Effects Around Images */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-300 text-2xl"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold magical-text mb-2 sm:mb-4 leading-tight"
          >
            Nidhi Sree & Thirumala Agam's
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl magical-text mb-2 sm:mb-4"
          >
            Magical 1st Birthday
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-lg sm:text-xl md:text-2xl text-yellow-300 script-text px-4 sm:px-0"
          >
            An Aladdin & Moana Adventure Awaits!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8"
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('invitation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.6)",
                  "0 0 40px rgba(255, 215, 0, 0.8)",
                  "0 0 20px rgba(255, 215, 0, 0.6)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Begin the Adventure ✨</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20"
                animate={{
                  x: [-100, 100],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
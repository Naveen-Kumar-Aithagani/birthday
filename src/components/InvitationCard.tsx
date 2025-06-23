import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const InvitationCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section ref={ref} className="py-8 sm:py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Magical Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Palace Silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-800/60 to-transparent"
          style={{
            clipPath: "polygon(0 100%, 15% 60%, 25% 70%, 35% 50%, 45% 65%, 55% 45%, 65% 60%, 75% 40%, 85% 55%, 100% 30%, 100% 100%)"
          }}
        />
        
        {/* Royal Curtains */}
        <motion.div
          initial={{ x: -100 }}
          animate={inView ? { x: 0 } : { x: -100 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-purple-800/80 via-purple-700/40 to-transparent"
          style={{
            background: "linear-gradient(90deg, rgba(91, 33, 182, 0.8) 0%, rgba(109, 40, 217, 0.6) 30%, rgba(124, 58, 237, 0.4) 60%, transparent 100%)"
          }}
        />
        <motion.div
          initial={{ x: 100 }}
          animate={inView ? { x: 0 } : { x: 100 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-800/80 via-purple-700/40 to-transparent"
          style={{
            background: "linear-gradient(270deg, rgba(91, 33, 182, 0.8) 0%, rgba(109, 40, 217, 0.6) 30%, rgba(124, 58, 237, 0.4) 60%, transparent 100%)"
          }}
        />

        {/* Floating Royal Elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['👑', '💎', '⭐', '✨', '🌟', '💫', '🔮', '🪄', '🏰'][Math.floor(Math.random() * 9)]}
          </motion.div>
        ))}

        {/* Magical Spotlights */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-center mb-6 sm:mb-12"
        >
          {/* Royal Crown with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="text-6xl sm:text-8xl mb-4 sm:mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.8)",
                  "0 0 40px rgba(255, 215, 0, 1)",
                  "0 0 20px rgba(255, 215, 0, 0.8)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👑
            </motion.span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold magical-text mb-2 sm:mb-4">
            Your Royal Invitation
          </h2>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "200px" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4"
          />
          
          <p className="text-base sm:text-xl text-yellow-300 script-text px-4 sm:px-0">
            Tap the scroll to reveal the magical details ✨
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
              animate={
                inView
                  ? { 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: isFlipped ? 180 : 0 
                    }
                  : { 
                      opacity: 0, 
                      scale: 0.8, 
                      rotateY: 0 
                    }
              }
              transition={{ duration: 1.5, delay: 0.5 }}
              className="relative w-80 h-96 sm:w-80 sm:h-96 md:w-96 md:h-[480px] cursor-pointer mx-auto max-w-full"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front of Card */}
              <div
                className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 rounded-xl p-4 sm:p-6 md:p-8 border-4 border-yellow-400 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
                  
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center glow-effect">
                        <span className="text-2xl">🧞‍♂️</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 magical-text mb-2">
                        Royal Scroll
                      </h3>
                      <p className="text-yellow-200 script-text text-base sm:text-lg">
                        A Magical Invitation Awaits
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-white mb-4 text-base sm:text-lg script-text">
                        "By the power of the Genie's lamp<br />
                        and the ocean's calling..."
                      </p>
                      <div className="bg-yellow-400 text-purple-900 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-base">
                        Tap to Reveal ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div
                className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-xl p-4 sm:p-6 md:p-8 border-4 border-purple-600 relative overflow-hidden">
                  {/* Golden border pattern */}
                  <div className="absolute inset-2 border-2 border-yellow-400 rounded-lg opacity-50"></div>
                  
                  <div className="h-full flex flex-col justify-center text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-purple-800 mb-6 script-text">
                        Come join us for a magical celebration of
                      </h3>
                      
                      {/* Interactive Photo Gallery */}
                      <div className="flex justify-center mb-6 relative">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isFlipped ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg relative z-10"
                        >
                          <motion.img
                            src="/doussss.jpeg"
                            alt="Nidhi Sree & Thirumala Agam"
                            className="w-full h-full object-cover"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/duo.jpeg";
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-yellow-300"
                            animate={{
                              boxShadow: [
                                "0 0 10px rgba(255, 215, 0, 0.5)",
                                "0 0 20px rgba(255, 215, 0, 0.8)",
                                "0 0 10px rgba(255, 215, 0, 0.5)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Floating mini images */}
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          animate={isFlipped ? { x: -10, opacity: 1 } : { x: -50, opacity: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="absolute left-4 top-2 w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 floating"
                        >
                          <img src="/duo.jpeg" alt="Sweet moment" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          animate={isFlipped ? { x: 10, opacity: 1 } : { x: 50, opacity: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="absolute right-4 top-2 w-12 h-12 rounded-full overflow-hidden border-2 border-pink-400 floating"
                          style={{ animationDelay: '1s' }}
                        >
                          <img src="/doussss.jpeg" alt="Beautiful twins" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Sparkles around images */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-yellow-300 text-lg"
                            style={{
                              left: `${30 + (i * 15)}%`,
                              top: `${20 + Math.sin(i) * 20}%`,
                            }}
                            animate={{
                              y: [-5, 5, -5],
                              opacity: [0.3, 1, 0.3],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2 + Math.random(),
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          >
                            ✨
                          </motion.div>
                        ))}
                      </div>

                      <h4 className="text-3xl font-bold magical-text mb-6">
                        Nidhi Sree & Thirumala Agam's<br />
                        1st Birthday!
                      </h4>
                      
                      <div className="space-y-3 text-purple-700 text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl">📅</span>
                          <span className="font-semibold">24th July 2025 | Thursday</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl">⏰</span>
                          <span className="font-semibold">7:30 PM onwards</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl">🏰</span>
                          <span className="font-semibold">Taj Falaknuma Palace</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl">📍</span>
                          <span className="font-semibold">Hyderabad</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-purple-100 rounded-lg border-l-4 border-purple-600">
                        <p className="text-purple-800 script-text text-lg italic">
                          "Join us for an adventure filled with magic, wonder, and birthday joy!"
                        </p>
                      </div>

                      {/* Interactive Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex gap-3 justify-center mt-4"
                      >
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            const element = document.getElementById('rsvp');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          🌊 RSVP Now
                        </motion.button>
                        
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            const element = document.getElementById('gallery');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          📸 Gallery
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard; 
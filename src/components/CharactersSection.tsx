import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const CharactersSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const characters = [
    {
      name: 'Moana',
      title: 'Ocean Explorer',
      message: 'Ready for an unforgettable journey across the seas!',
      gradient: 'from-blue-500 via-teal-500 to-green-500',
      bgGradient: 'from-blue-900 to-teal-900',
      emoji: '🌊',
      animation: 'wave',
      quote: '"The ocean chose you for a reason"',
    },
    {
      name: 'Aladdin',
      title: 'Magic Carpet Rider',
      message: 'Ready for an unforgettable journey through the skies!',
      gradient: 'from-purple-500 via-pink-500 to-yellow-500',
      bgGradient: 'from-purple-900 to-pink-900',
      emoji: '🧞‍♂️',
      animation: 'floating',
      quote: '"A whole new world awaits"',
    },
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold magical-text mb-4">
            Adventure Characters
          </h2>
          <p className="text-xl text-yellow-300 script-text">
            Meet your magical adventure guides
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              animate={
                inView 
                  ? { opacity: 1, x: 0 } 
                  : { opacity: 0, x: index === 0 ? -100 : 100 }
              }
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex justify-center"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
              >
                <div className="relative group cursor-pointer">
                  <div 
                    className={`w-80 h-96 rounded-2xl bg-gradient-to-br ${character.bgGradient} p-6 border-4 border-yellow-400 shadow-2xl relative overflow-hidden`}
                  >
                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                      {character.name === 'Moana' ? (
                        // Ocean waves for Moana
                        <svg 
                          className="absolute bottom-0 left-0 w-full h-32 opacity-30"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="fill-blue-400 wave"
                          />
                        </svg>
                      ) : (
                        // Stars for Aladdin
                        <>
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="star"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                animationDelay: `${Math.random() * 2}s`,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>

                    {/* Character Avatar */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
                      className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${character.gradient} rounded-full flex items-center justify-center text-4xl glow-effect ${character.animation} relative z-10`}
                    >
                      {character.emoji}
                    </motion.div>

                    {/* Character Info */}
                    <div className="text-center relative z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.3 }}
                        className="text-3xl font-bold magical-text mb-2"
                      >
                        {character.name}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.9 + index * 0.3 }}
                        className="text-lg text-yellow-300 script-text mb-4"
                      >
                        {character.title}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1.1 + index * 0.3 }}
                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-4"
                      >
                        <p className="text-white font-medium">
                          {character.message}
                        </p>
                      </motion.div>
                      
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1.3 + index * 0.3 }}
                        className="text-yellow-200 script-text text-lg italic"
                      >
                        {character.quote}
                      </motion.blockquote>
                    </div>

                    {/* Interactive hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Floating sparkles */}
                    <div className="absolute top-4 right-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ✨
                    </div>
                    <div className="absolute top-8 left-8 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-300">
                      ⭐
                    </div>
                    <div className="absolute bottom-8 right-8 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-600">
                      💫
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-yellow-300 script-text">
            Which adventure will you choose? 🌟
          </p>
          <div className="mt-6">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform glow-effect">
              Join Both Adventures! 🎭
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersSection; 
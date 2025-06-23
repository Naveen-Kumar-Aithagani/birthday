import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const AladdinSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videoplayback (1).mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-800/60 to-purple-900/80"></div>
        
        {/* Desert dunes overlay */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 Q300,50 600,100 T1200,100 L1200,160 L0,160 Z"
              className="fill-amber-400"
            />
            <path
              d="M0,120 Q400,70 800,120 T1200,120 L1200,160 L0,160 Z"
              className="fill-yellow-500 opacity-70"
            />
          </svg>
        </div>
      </div>

      {/* Floating Magic Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Magic Sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
        ))}
        
        {/* Flying Magic Carpets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              x: [-50, 50, -50],
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            🪄
          </motion.div>
        ))}

        {/* Genie Lamps */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🪔
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Side - Text Content (Reversed for visual variety) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className="text-center lg:text-right order-2 lg:order-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold magical-text mb-6"
              >
                Aladdin's Magic Kingdom
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl md:text-3xl text-yellow-200 script-text mb-8"
              >
                "A whole new world awaits"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-purple-900/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-400"
              >
                <h3 className="text-2xl font-bold text-yellow-200 mb-4">
                  🧞‍♂️ Thirumala Agam's Magic Adventure
                </h3>
                <p className="text-yellow-100 text-lg mb-4">
                  Like brave Aladdin, little Thirumala Agam is ready to soar through the clouds of imagination. 
                  Join us as we celebrate his first year of magic and the countless wishes yet to come true!
                </p>
                
                {/* Thirumala Agam's Photo Gallery */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  {[
                    { src: '/aladdin/agam.jpeg', alt: 'Little Prince' },
                    { src: '/aladdin/agam suit.jpeg', alt: 'Handsome in Suit' },
                    { src: '/aladdin/aladdd.jpeg', alt: 'Magic Carpet Ready' },
                    { src: '/aladdin/full aladin.jpeg', alt: 'Full Aladdin Look' }
                  ].map((photo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg border-2 border-yellow-300"
                    >
                      <div className="aspect-square bg-gradient-to-br from-purple-500 to-yellow-500 flex items-center justify-center">
                        <img
                          src={photo.src}
                          alt={`Thirumala Agam - ${photo.alt}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-yellow-500 flex items-center justify-center text-2xl hidden">
                          🧞‍♂️
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-4 text-3xl">
                  <span>🧞‍♂️</span>
                  <span>🪔</span>
                  <span>💎</span>
                  <span>🌟</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Left Side - Interactive Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
              >
                <div className="relative group">
                  <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-600 p-8 border-4 border-yellow-300 shadow-2xl relative overflow-hidden">
                    {/* Card Background Effects */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-3xl"></div>
                      
                      {/* Magic Smoke Effect */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-32">
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full bg-gradient-to-t from-purple-400/40 to-transparent rounded-full blur-sm"
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, -5, 5, 0],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center text-4xl mb-6 glow-effect transform rotate-12"
                        style={{
                          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                      >
                        🧞‍♂️
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 magical-text">
                        Genie's Magic Lamp
                      </h3>
                      
                      <p className="text-yellow-100 text-lg mb-6">
                        Three wishes await those brave enough to rub the lamp
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 text-purple-900 px-6 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all glow-effect"
                      >
                        Make a Wish 🌟
                      </motion.button>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute top-4 right-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                      💫
                    </div>
                    <div className="absolute bottom-4 left-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                      🪔
                    </div>
                    <div className="absolute top-4 left-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
                      ✨
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Magic Carpet Flying Across Screen */}
      <motion.div
        initial={{ x: -200, y: 100 }}
        animate={{ 
          x: window.innerWidth + 200, 
          y: [100, 80, 120, 100] 
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-20 z-30 text-4xl"
      >
        🪄
      </motion.div>
    </section>
  );
};

export default AladdinSection; 
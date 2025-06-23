import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const MoanaSection: React.FC = () => {
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
          <source src="/Cute Baby Moana __ Nenjukkule BGM __ AR Rahman __ Tamil Whatsapp Status.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-teal-800/60 to-blue-900/80"></div>
        
        {/* Animated ocean waves overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-40">
          <svg
            className="wave"
            width="100%"
            height="100%"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-cyan-400"
            />
          </svg>
        </div>
      </div>

      {/* Floating Ocean Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating Bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Ocean Heart Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            💎
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className="text-center lg:text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold magical-text mb-6"
              >
                Moana's Ocean Adventure
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl md:text-3xl text-cyan-200 script-text mb-8"
              >
                "The ocean chose you for a reason"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-cyan-900/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  🌊 Nidhi Sree's Ocean Journey
                </h3>
                <p className="text-cyan-100 text-lg mb-4">
                  Like brave Moana, little Nidhi Sree is ready to explore the vast ocean of life. 
                  Join us as we celebrate her first year of adventures and the many voyages ahead!
                </p>
                
                {/* Nidhi Sree's Photo Gallery */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  {[
                    { src: '/moana/nidhi.jpeg', alt: 'Little Ocean Princess' },
                    { src: '/moana/nidhi tradesional.jpeg', alt: 'Beautiful Traditional Look' },
                    { src: '/moana/nidiiii.jpeg', alt: 'Adorable Smile' },
                    { src: '/moana/moaana slide.jpeg', alt: 'Moana Adventure' }
                  ].map((photo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg border-2 border-cyan-300"
                    >
                      <div className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <img
                          src={photo.src}
                          alt={`Nidhi Sree - ${photo.alt}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl hidden">
                          🌊
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-4 text-3xl">
                  <span>🚣‍♀️</span>
                  <span>🌺</span>
                  <span>🐚</span>
                  <span>🌊</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Interactive Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex justify-center"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
              >
                <div className="relative group">
                  <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-700 p-8 border-4 border-cyan-300 shadow-2xl relative overflow-hidden">
                    {/* Card Background Effects */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl"></div>
                      
                      {/* Animated waves inside card */}
                      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30">
                        <path
                          d="M0,60 Q100,40 200,60 T400,60 L400,100 L0,100 Z"
                          className="fill-cyan-300 wave"
                        />
                      </svg>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center text-4xl mb-6 glow-effect"
                      >
                        💎
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 magical-text">
                        Heart of Te Fiti
                      </h3>
                      
                      <p className="text-cyan-100 text-lg mb-6">
                        The ocean calls to brave hearts who are ready for adventure
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all glow-effect"
                      >
                        Join the Voyage 🌊
                      </motion.button>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute top-4 right-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ✨
                    </div>
                    <div className="absolute bottom-4 left-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🌺
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoanaSection; 
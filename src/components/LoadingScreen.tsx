import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 1000);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 overflow-hidden"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999
          }}
        >
          {/* Background Animated Elements */}
          <div className="absolute inset-0">
            {/* Floating Magic Elements */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {['✨', '🌟', '💫', '🪄', '🧞‍♂️', '🌊', '💎'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}

            {/* Animated Waves */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-32"
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="fill-cyan-400 opacity-30"
                />
              </svg>
            </motion.div>
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Animated Duo Image Placeholder */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl relative"
            >
              <motion.img
                src="/doussss.jpeg"
                alt="Nidhi Sree & Thirumala Agam"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                onError={(e) => {
                  // Fallback to original duo image
                  (e.target as HTMLImageElement).src = "/duo.jpeg";
                }}
              />
              {/* Fallback content */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl">
                👶👶
              </div>
              
              {/* Glowing border animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-yellow-300"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 215, 0, 0.6)",
                    "0 0 40px rgba(255, 215, 0, 1)",
                    "0 0 20px rgba(255, 215, 0, 0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold magical-text mb-4"
            >
              Nidhi Sree & Thirumala Agam
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl text-yellow-300 script-text mb-8"
            >
              Preparing magical adventure...
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-80 mx-auto"
            >
              <div className="bg-purple-800/50 rounded-full h-4 overflow-hidden border-2 border-yellow-400">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.p
                className="text-yellow-200 mt-2 text-lg font-semibold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress < 100 ? `${Math.round(progress)}%` : 'Ready for Magic! ✨'}
              </motion.p>
            </motion.div>

            {/* Loading Text Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-6"
            >
              {progress < 30 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-300 script-text text-lg"
                >
                  Loading Moana's ocean adventures... 🌊
                </motion.p>
              )}
              {progress >= 30 && progress < 60 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-yellow-300 script-text text-lg"
                >
                  Summoning Aladdin's magic carpet... 🪄
                </motion.p>
              )}
              {progress >= 60 && progress < 90 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-pink-300 script-text text-lg"
                >
                  Preparing birthday wishes... 🎂
                </motion.p>
              )}
              {progress >= 90 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-300 script-text text-lg"
                >
                  The magic is ready! ✨
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-8 left-8 text-6xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🧞‍♂️
          </motion.div>
          <motion.div
            className="absolute top-8 right-8 text-6xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌊
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 text-6xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🪔
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-6xl"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            💎
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 
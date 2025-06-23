import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import MagicalCursor from './components/MagicalCursor';
import FloatingNavigation from './components/FloatingNavigation';
import HeroSection from './components/HeroSection';
import InvitationCard from './components/InvitationCard';
import MoanaSection from './components/MoanaSection';
import AladdinSection from './components/AladdinSection';
import PhotoGallery from './components/PhotoGallery';

import CountdownTimer from './components/CountdownTimer';
import MapRSVPSection from './components/MapRSVPSection';
import ErrorBoundary from './components/ErrorBoundary';
import { isMobile } from 'react-device-detect';

// Add gyroscope support for mobile
const useGyroscope = () => {
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 0 });

  useEffect(() => {
    if (isMobile && 'DeviceOrientationEvent' in window) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        setOrientation({
          beta: event.beta || 0,
          gamma: event.gamma || 0,
        });
      };

      // Request permission for iOS 13+
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation);
            }
          })
          .catch(console.error);
      } else {
        // For other devices
        window.addEventListener('deviceorientation', handleOrientation);
      }

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    }
  }, []);

  return orientation;
};

function App() {
  const [showMusicToggle] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const orientation = useGyroscope();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Apply subtle gyroscope effect to body
  useEffect(() => {
    if (isMobile) {
      const { beta, gamma } = orientation;
      const transformX = Math.max(-2, Math.min(2, gamma * 0.1));
      const transformY = Math.max(-2, Math.min(2, beta * 0.1));
      
      document.body.style.transform = `translate(${transformX}px, ${transformY}px)`;
    }
  }, [orientation]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    
    // Try to play/pause audio if available
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      if (isMusicPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
      }
    }
  };

  return (
    <ErrorBoundary>
    <div className="App">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Magical Cursor Effect */}
      {!isLoading && <MagicalCursor />}

      {/* Background Music Toggle */}
      {showMusicToggle && !isLoading && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleMusic}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform glow-effect"
            title={isMusicPlaying ? 'Pause magical music' : 'Play magical music'}
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
        </div>
      )}

      {/* Scroll to top and Share buttons - Desktop */}
      {!isLoading && (
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:flex lg:flex hidden">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Nidhi Sree & Thirumala Agam\'s 1st Birthday',
                  text: 'Join us for a magical Disney-themed birthday celebration!',
                  url: window.location.href
                }).catch(console.error);
              } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Invitation link copied to clipboard!');
                });
              }
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform glow-effect"
            title="Share the magic"
          >
            📤
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform glow-effect"
            title="Return to the magic"
          >
            ⭐
          </button>
        </div>
      )}

      {/* Mobile-specific buttons */}
      {!isLoading && (
        <div className="fixed top-4 left-4 z-50 flex gap-2 md:hidden">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Nidhi Sree & Thirumala Agam\'s 1st Birthday',
                  text: 'Join us for a magical Disney-themed birthday celebration!',
                  url: window.location.href
                }).catch(console.error);
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Link copied!');
                });
              }
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform text-sm"
            title="Share"
          >
            📤
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform text-sm"
            title="Top"
          >
            ⭐
          </button>
        </div>
      )}

      {/* Hidden audio element for background music */}
      <audio
        id="background-music"
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/Cute Baby Moana __ Nenjukkule BGM __ AR Rahman __ Tamil Whatsapp Status.mp4" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Navigation */}
      {!isLoading && <FloatingNavigation />}

      {/* Main Content */}
      {!isLoading && (
        <motion.main 
          className="relative pb-32 md:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div id="hero">
            <HeroSection />
          </div>
          <div id="invitation">
            <InvitationCard />
          </div>
          <div id="moana">
            <MoanaSection />
          </div>
          <div id="aladdin">
            <AladdinSection />
          </div>
          <div id="gallery">
            <PhotoGallery />
          </div>

          <div id="countdown">
            <CountdownTimer />
          </div>
          <div id="rsvp">
            <MapRSVPSection />
          </div>
        </motion.main>
      )}

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 py-12 text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-yellow-300 script-text text-xl mb-6 rainbow-text"
          >
            "May this celebration be filled with magic, laughter, and endless joy!"
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center items-center gap-6 text-4xl mb-6"
          >
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0 
              }}
            >
              🧞‍♂️
            </motion.span>
            <motion.span
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.4 
              }}
            >
              🌊
            </motion.span>
            <motion.span
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.8 
              }}
            >
              🏰
            </motion.span>
            <motion.span
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1.2 
              }}
            >
              🎂
            </motion.span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 1.6 
              }}
            >
              ✨
            </motion.span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-yellow-200 text-lg mb-4"
          >
            With love and magical wishes for Nidhi Sree & Thirumala Agam's 1st Birthday
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-yellow-100 text-sm magical-text"
          >
            Created with ✨ magic ✨ • July 24th, 2025
          </motion.p>
        </div>
      </footer>
    </div>
    </ErrorBoundary>
  );
}

export default App;

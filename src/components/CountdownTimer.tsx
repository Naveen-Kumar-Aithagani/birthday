import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    // Set target date to June 28th, 2025 7:30 PM IST (corrected date)
    const targetDate = new Date('2025-06-28T19:30:00+05:30').getTime();

    const timer = setInterval(() => {
      // Get current time in IST
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + istOffset).getTime();
      
      const difference = targetDate - istTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, icon: '🗓️' },
    { label: 'Hours', value: timeLeft.hours, icon: '⏰' },
    { label: 'Minutes', value: timeLeft.minutes, icon: '⏳' },
    { label: 'Seconds', value: timeLeft.seconds, icon: '⚡' },
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background stars */}
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold magical-text mb-4">
            The Magic Begins In...
          </h2>
          <p className="text-xl text-yellow-300 script-text">
            Count down to the most magical birthday celebration! ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-700 to-pink-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 sm:border-4 border-yellow-400 shadow-2xl relative overflow-hidden pulse-glow morphing-bg">
                {/* Sparkle effects */}
                <div className="absolute top-2 right-2 text-yellow-300 opacity-60 group-hover:opacity-100 transition-opacity">
                  ✨
                </div>
                <div className="absolute bottom-2 left-2 text-yellow-300 opacity-60 group-hover:opacity-100 transition-opacity">
                  💫
                </div>

                                  <div className="text-center relative z-10">
                    <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{unit.icon}</div>
                    <motion.div
                      key={unit.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rainbow-text mb-1 sm:mb-2"
                    >
                      {unit.value.toString().padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm sm:text-base md:text-lg text-yellow-300 font-semibold">
                      {unit.label}
                    </div>
                  </div>

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-8 py-4 rounded-full inline-block font-bold text-lg shadow-lg">
            📅 June 28th, 2025 • 7:30 PM • Taj Falaknuma Palace 🏰
          </div>
          <p className="text-yellow-200 script-text text-xl mt-4">
            "Every second brings us closer to the magic!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const MapRSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-indigo-900 via-blue-900 to-purple-900 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold magical-text mb-4">
            Join Our Magical Celebration
          </h2>
          <p className="text-xl text-yellow-300 script-text">
            Find your way to the palace and let us know you're coming! 🏰✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl p-6 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-yellow-300 text-2xl">🗺️</div>
                <div className="absolute top-4 right-4 text-yellow-300 text-2xl">🏰</div>
                
                <h3 className="text-2xl font-bold magical-text mb-6 text-center">
                  Taj Falaknuma Palace
                </h3>
                
                {/* Google Map Embed */}
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.6947896394244!2d78.4421!3d17.2523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbb8e21e4a6b9%3A0x8f4a8e4a8e4a8e4a!2sTaj%20Falaknuma%20Palace%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Taj Falaknuma Palace Location Map"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-900 opacity-10 pointer-events-none"></div>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full inline-block font-bold text-lg mb-4">
                    📍 Hyderabad, Telangana
                  </div>
                  <p className="text-yellow-200 script-text text-lg">
                    "A palace fit for a magical birthday celebration!"
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* RSVP Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <div className="bg-gradient-to-br from-pink-800 to-purple-800 rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
                {/* Background sparkles */}
                {[...Array(15)].map((_, i) => (
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

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl glow-effect">
                      🧞‍♂️
                    </div>
                    <h3 className="text-2xl font-bold magical-text mb-2">
                      RSVP to the Adventure
                    </h3>
                    <p className="text-yellow-200 script-text">
                      Let the Genie know you're coming!
                    </p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <label className="block text-yellow-300 font-semibold mb-2">
                          Your Magical Name ✨
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-purple-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                          placeholder="Enter your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <label className="block text-yellow-300 font-semibold mb-2">
                          Magic Carpet Mail 📧
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-purple-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                          placeholder="your@email.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <label className="block text-yellow-300 font-semibold mb-2">
                          Your Birthday Wishes 💫
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-purple-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                          placeholder="Share your magical birthday wishes..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="text-center"
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform glow-effect disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending via Magic Carpet...
                            </span>
                          ) : (
                            '🪄 Cast Your RSVP Spell!'
                          )}
                        </button>
                      </motion.div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="text-center py-8"
                    >
                      <div className="text-6xl mb-4">🧞‍♂️</div>
                      <h4 className="text-2xl font-bold magical-text mb-4">
                        Your Wish is Granted!
                      </h4>
                      <p className="text-yellow-200 script-text text-lg mb-6">
                        The Genie has received your RSVP!<br />
                        Prepare for a magical celebration! ✨
                      </p>
                      <div className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full inline-block font-bold">
                        🎭 See you at the palace! 🏰
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapRSVPSection; 
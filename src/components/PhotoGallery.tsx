import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

interface Photo {
  src: string;
  alt: string;
  category: 'moana' | 'aladdin' | 'family' | 'duo';
}

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    // Initialize photos array with placeholders
    // In a real app, you might dynamically load these
    const photosList: Photo[] = [
      // Duo photos
      { src: '/duo.jpeg', alt: 'Nidhi Sree & Thirumala Agam Together', category: 'duo' },
      { src: '/doussss.jpeg', alt: 'Sweet Twins Moment', category: 'duo' },
      
      // Moana photos (Nidhi Sree)
      { src: '/moana/nidhi.jpeg', alt: 'Nidhi Sree - Little Ocean Princess', category: 'moana' },
      { src: '/moana/nidhi tradesional.jpeg', alt: 'Nidhi Sree - Beautiful Traditional Look', category: 'moana' },
      
      // Aladdin photos (Agam)
      { src: '/aladdin/agam.jpeg', alt: 'Thirumala Agam - Little Prince', category: 'aladdin' },
      { src: '/aladdin/agam suit.jpeg', alt: 'Thirumala Agam - Handsome in Suit', category: 'aladdin' },
      
      // Family photos
      { src: '/family/family .jpeg', alt: 'Beautiful Family Portrait', category: 'family' },
      { src: '/family/group family.jpeg', alt: 'Happy Extended Family', category: 'family' },
      { src: '/family/nidhi and mom.jpeg', alt: 'Nidhi with Loving Mom', category: 'family' },
      { src: '/family/parents mom.jpeg', alt: 'Three Generations Together', category: 'family' },
      { src: '/family/mom and nidhi.jpeg', alt: 'Sweet Mother-Daughter Moment', category: 'family' },
      { src: '/family/fammmmmm.jpeg', alt: 'Complete Family Joy', category: 'family' },
    ];
    
    setPhotos(photosList);
  }, []);

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Memories', emoji: '📸', color: 'from-purple-500 to-pink-500' },
    { id: 'duo', label: 'Together', emoji: '👶👶', color: 'from-yellow-500 to-orange-500' },
    { id: 'moana', label: 'Nidhi Sree', emoji: '🌊', color: 'from-cyan-500 to-blue-500' },
    { id: 'aladdin', label: 'Thirumala Agam', emoji: '🧞‍♂️', color: 'from-purple-500 to-pink-500' },
    { id: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦', color: 'from-green-500 to-teal-500' },
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 min-h-screen relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 8}px`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            📸
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold magical-text mb-2 sm:mb-4">
            Magical Memory Gallery
          </h2>
          <p className="text-base sm:text-xl text-yellow-300 script-text">
            Precious moments from our little adventurers ✨
          </p>
        </motion.div>

        {/* Category Filter - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 sm:mb-12 px-2"
        >
          {/* Mobile: Stack in rows */}
          <div className="flex flex-col sm:hidden gap-3">
            <div className="flex justify-center gap-2">
              {categories.slice(0, 3).map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-1 px-3 py-2 rounded-full font-semibold text-white transition-all text-sm ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} shadow-lg scale-105`
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">{category.emoji}</span>
                    <span className="text-xs leading-tight">{category.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center gap-2">
              {categories.slice(3).map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-1 px-3 py-2 rounded-full font-semibold text-white transition-all text-sm ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} shadow-lg scale-105`
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">{category.emoji}</span>
                    <span className="text-xs leading-tight">{category.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop: Single row */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-white transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} shadow-lg scale-105`
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={1500}
                  gyroscope={true}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 group-hover:border-yellow-400 transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onClick={() => setSelectedPhoto(photo)}
                        onError={(e) => {
                          // Fallback content for missing images
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl hidden">
                        {photo.category === 'moana' ? '🌊' : 
                         photo.category === 'aladdin' ? '🧞‍♂️' : 
                         photo.category === 'family' ? '👨‍👩‍👧‍👦' : '👶👶'}
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-sm">{photo.alt}</p>
                      </div>
                    </div>

                    {/* Magic sparkles on hover */}
                    <div className="absolute top-2 right-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ✨
                    </div>
                    <div className="absolute bottom-2 left-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      💫
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-4xl m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-6">
                  <p className="text-white text-lg font-semibold">{selectedPhoto.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery; 
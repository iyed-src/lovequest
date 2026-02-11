import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PLACEHOLDER_IMAGES = [
  'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1310532/pexels-photo-1310532.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1571848/pexels-photo-1571848.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PLACEHOLDER_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PLACEHOLDER_IMAGES.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PLACEHOLDER_IMAGES.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
        {PLACEHOLDER_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Romantic moment ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-rose-500" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-rose-500" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {PLACEHOLDER_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-rose-400'
                : 'w-2 bg-rose-200 hover:bg-rose-300'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

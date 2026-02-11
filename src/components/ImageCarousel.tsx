const PLACEHOLDER_IMAGES = [
  'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1310532/pexels-photo-1310532.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1571848/pexels-photo-1571848.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function ImageCarousel() {
  const cardWidth = 280;
  const gap = 24;
  const totalImages = PLACEHOLDER_IMAGES.length;

  return (
    <div className="w-full">
      <style>{`
        @keyframes infiniteCarousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalImages * (cardWidth + gap)}px);
          }
        }

        .carousel-scroll {
          animation: infiniteCarousel 50s linear infinite;
        }

        .carousel-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden py-4">
        <div className="carousel-scroll flex gap-6" style={{ width: 'fit-content' }}>
          {[...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES].map(
            (image, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardWidth}px`,
                }}
              >
                <img
                  src={image}
                  alt={`Romantic moment ${(index % totalImages) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      <p className="text-center text-sm text-rose-300 mt-6 italic">
        Hover to pause the carousel
      </p>
    </div>
  );
}

const PLACEHOLDER_IMAGES = [
  'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1310532/pexels-photo-1310532.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1571848/pexels-photo-1571848.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function ImageCarousel() {
  return (
    <div className="w-full">
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / ${PLACEHOLDER_IMAGES.length}));
          }
        }

        .carousel-container {
          animation: infiniteScroll 40s linear infinite;
        }

        .carousel-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
        <div className="h-64 md:h-96 bg-gradient-to-b from-rose-100 to-pink-100">
          <div
            className="carousel-container h-full flex"
            style={{
              width: `${PLACEHOLDER_IMAGES.length * 100}%`,
            }}
          >
            {[...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES].map((image, index) => (
              <div
                key={index}
                className="h-full flex-shrink-0"
                style={{
                  width: `${100 / PLACEHOLDER_IMAGES.length}%`,
                }}
              >
                <img
                  src={image}
                  alt={`Romantic moment ${(index % PLACEHOLDER_IMAGES.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
        </div>
      </div>

      <p className="text-center text-sm text-rose-300 mt-4 italic">
        Hover to pause the carousel
      </p>
    </div>
  );
}

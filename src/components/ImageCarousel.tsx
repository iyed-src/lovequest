const  PLACEHOLDER_IMAGES = [
  'https://drive.google.com/file/d/1dPCxJ_PK6nxuPtME3WSU0we7E-HmoLps/view?usp=drive_link',
  'https://drive.google.com/file/d/1kS4tKUL8nq0E1XloxSM1cGCHHoRGDfT8/view?usp=drive_link',
  'https://drive.google.com/file/d/1EvmZOd1LnfVtEiI1W4773e4KIzFPMWuN/view?usp=drive_link',
  'https://drive.google.com/file/d/1oJJ7A0Q_5llyBmyABfFbuCmGaqTzx1TQ/view?usp=drive_link',
  'https://drive.google.com/file/d/1_l3fJnXmMEx4_yoyN_XB4DZnrr7k70br/view?usp=drive_link',
  'https://drive.google.com/file/d/1xykJOQjZlrcgidgDs2qhGp7V8N7VQHQJ/view?usp=drive_link',
];

// Helper to convert Drive view links to direct image links
const getDirectDriveLink = (url: string) => {
  const idMatch = url.match(/\/d\/(.+?)\//);
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  return url;
};

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
          {[...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES].map(
          // {PLACEHOLDER_IMAGES.map(
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
                  src={getDirectDriveLink(image)}
                  alt={`lovey lovey ${(index % totalImages) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* <p className="text-center text-sm text-rose-300 mt-6 italic">
        Hover to pause the carousel
      </p> */}
    </div>
  );
}

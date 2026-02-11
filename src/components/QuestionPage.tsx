import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';

interface QuestionPageProps {
  onYesClick: () => void;
}

export default function QuestionPage({ onYesClick }: QuestionPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!noButtonRef.current) return;

    const maxX = window.innerWidth - noButtonRef.current.offsetWidth - 40;
    const maxY = window.innerHeight - noButtonRef.current.offsetHeight - 40;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="mb-8 animate-bounce-slow">
          <Heart className="w-24 h-24 md:w-32 md:h-32 mx-auto text-rose-400 fill-rose-400 drop-shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-500 mb-12 animate-fade-in font-pacifico">
          Will you be my Valentine
          <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">once again?</span>
          <span className="inline-block ml-2 animate-pulse">💕</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
          <button
            onClick={onYesClick}
            className="px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xl md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-subtle"
          >
            Yes (yayyy 💖)
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="px-12 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 text-xl md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            style={
              isNoButtonMoved
                ? {
                    position: 'fixed',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    transition: 'all 0.3s ease-out',
                  }
                : {}
            }
          >
            No (booo 😢)
          </button>
        </div>

        <p className="mt-12 text-rose-300 text-lg md:text-xl animate-fade-in-delay italic">
          Choose wisely... 💝
        </p>
      </div>
    </div>
  );
}

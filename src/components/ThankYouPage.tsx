import ImageCarousel from './ImageCarousel';
import { Heart, Sparkles } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12 relative animate-fade-in">
      <div className="max-w-4xl mx-auto w-full space-y-12 z-10">
        <div className="text-center space-y-6 animate-slide-up">
          <div className="flex justify-center items-center gap-4">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-300 animate-pulse" />
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-rose-400 fill-rose-400 animate-heartbeat" />
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-300 animate-pulse" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-rose-500 font-pacifico leading-relaxed px-4">
            Thank you for being
            <br />
            in my life, Nawwara 💗
          </h1>

          <p className="text-lg md:text-xl text-rose-300 italic max-w-2xl mx-auto px-4">
            Every moment with you is a treasure I hold close to my heart
          </p>
        </div>

        <div className="animate-slide-up-delay">
          <ImageCarousel />
        </div>

        <div className="text-center space-y-4 animate-slide-up-delay-2">
          <p className="text-2xl md:text-3xl text-rose-400 font-pacifico">
            Forever yours 💕
          </p>

          <div className="flex justify-center gap-2 text-3xl md:text-4xl animate-float">
            🌸 💝 🌹 💖 🌸
          </div>
        </div>
      </div>
    </div>
  );
}

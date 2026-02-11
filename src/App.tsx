import { useState } from 'react';
import QuestionPage from './components/QuestionPage';
import ThankYouPage from './components/ThankYouPage';
import FloatingHearts from './components/FloatingHearts';
import Confetti from './components/Confetti';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowThankYou(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 relative overflow-hidden">
      <FloatingHearts />

      {showConfetti && <Confetti />}

      <div className="relative z-10">
        {!showThankYou ? (
          <QuestionPage onYesClick={handleYesClick} />
        ) : (
          <ThankYouPage />
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/50 to-transparent pointer-events-none" />
    </div>
  );
}

export default App;

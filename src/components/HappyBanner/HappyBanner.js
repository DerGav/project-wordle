import React from 'react';

function HappyBanner({ numGuesses }) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numGuesses > 1 ? `${numGuesses} guesses` : '1 guess'}</strong>.
    </p>
  </div>;
}

export default HappyBanner;

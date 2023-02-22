import React from 'react';

function WinBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses} guesses</strong>.
      </p>
    </div>
  );
}

export default WinBanner;

import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p key={row} className="guess">
          {range(5).map((col) => (
            <span
              key={col}
              className={guessList[row] ? `cell ${guessList[row][col].status}` : 'cell'}
            >
              {guessList[row] && guessList[row][col].letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

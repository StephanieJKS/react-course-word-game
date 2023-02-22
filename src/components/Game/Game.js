import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [won, setWon] = React.useState(false);

  function addNewGuess(guess) {
    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      const newGuessItem = checkGuess(guess, answer);
      const newGuessList = [...guessList, newGuessItem];
      setGuessList(newGuessList);

      if (guess === answer) {
        setWon(true);
      }

      return;
    }

    window.alert('Max number of guesses reached!');
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      {won && <WinBanner guesses={guessList.length} />}
      {guessList.length === NUM_OF_GUESSES_ALLOWED && <LoseBanner answer={answer} />}
      <GuessInput
        addNewGuess={addNewGuess}
        disabled={won || guessList.length === NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;

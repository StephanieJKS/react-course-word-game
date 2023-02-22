import React from 'react';

function GuessInput({ addNewGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length === 5 && /^[A-Za-z]*$/.test(guess)) {
          const newGuess = guess.toUpperCase();
          addNewGuess(newGuess);
          setGuess('');
          return;
        }

        window.alert('Guess must consist of 5 letters!');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={disabled}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
        type="text"
      />
    </form>
  );
}

export default GuessInput;

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  const lastGuess = guesses[guesses.length - 1];
  const guessedAnswer = lastGuess === answer;
  const maxGuessesReached = guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const gameIsOver = maxGuessesReached || guessedAnswer

  return <>
    <GuessResults guesses={guesses} answer={answer}/>
    GAME OVER: {gameIsOver}
    <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={gameIsOver}/>
    {
      guessedAnswer ? 
        <HappyBanner numGuesses={guesses.length}/> :
        gameIsOver ? 
          <SadBanner answer={answer} /> :
          undefined
    }
  </>;
}

export default Game;

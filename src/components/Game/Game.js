import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';


function Game() {
  const pickAnswer = () => sample(WORDS);

  const [answer, setAnswer] = React.useState(pickAnswer)

  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  const resetGame = () => {
    setAnswer(pickAnswer())
    setGuesses([])
  }

  const lastGuess = guesses[guesses.length - 1];
  const guessedAnswer = lastGuess === answer;
  const maxGuessesReached = guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const gameIsOver = maxGuessesReached || guessedAnswer

  return <>
    <button onClick={resetGame}>Restart</button>
    <GuessResults guesses={guesses} answer={answer}/>
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

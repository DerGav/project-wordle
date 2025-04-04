import React from 'react';

import { range } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants' 
import Guess from '../Guess'

function GuessResults({guesses, answer}) {
  return <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        
        return <Guess 
          key={i} 
          className="guess"
          text={guesses[i]}
          answer={answer}
        />
      })
    }
  </div>;
}

export default GuessResults;

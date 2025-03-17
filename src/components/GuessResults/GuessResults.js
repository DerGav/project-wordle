import React from 'react';

function GuessResults({guesses}) {
  return <div className="guess-results">
    {
      guesses.map(({id, text}) => {
        return <p key={id} className="guess">
          {text}
        </p>
      })
    }
  </div>;
}

export default GuessResults;

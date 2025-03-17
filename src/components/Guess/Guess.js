import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'


function Cell({letter, status}) {
  const classNames = status ? `cell ${status}` : 'cell'

  return <>
    <span className={classNames}>{letter}</span>
  </>
}

function Guess({text = '', answer}) {

  const checkResult = checkGuess(text, answer)

  return  <p className="guess">
    {
      range(5).map(
        (i) => {
          const {status} = checkResult?.[i] ?? {}
          return <Cell key={i} letter={text[i]} status={status} />
        }
      )
    }
  </p>;
}

export default Guess;

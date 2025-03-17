import React from 'react';

import { range } from '../../utils';

function Guess({text = ''}) {
  return  <p className="guess">
    {
      range(5).map(
        (i) => {
          return <span key= {i} className="cell">{text[i]}</span>
        }
      )
    }
  </p>;
}

export default Guess;

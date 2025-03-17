import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess('')
  };

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input"
      type="text" 
      value={guess} 
      onChange={handleChange} 
      pattern='[A-Za-z]{5}'
      title='Five letters'
    />
  </form>;
}

export default GuessInput;

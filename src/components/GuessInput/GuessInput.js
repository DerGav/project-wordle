import React from 'react';

function GuessInput({handleSubmitGuess, disabled}) {

  const [guess, setGuess] = React.useState('');

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess('')
  };

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input"
      type="text" 
      value={guess} 
      onChange={handleChange} 
      disabled={disabled}
      pattern='[A-Za-z]{5}'
      title='Five letters'
    />
  </form>;
}

export default GuessInput;

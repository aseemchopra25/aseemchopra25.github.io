import React, { useState } from 'react';
import Confetti from 'react-confetti';

const LoginPanel = () => {
  const [showHint, setShowHint] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleHintClick = () => {
    setShowHint(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.toLowerCase() === 'yes') {
      setShowFireworks(true);
    } else {
      setShowFireworks(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleHintClick}>Password Hint</button>
      <div style={{ marginTop: '20px' }}>
        {showHint && <p>Hint: will you marry me?</p>}
        <input
          type="text"
          placeholder="Password"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginTop: '10px' }}
        />
      </div>
      {showFireworks && <Confetti />}
    </div>
  );
};

export default LoginPanel;
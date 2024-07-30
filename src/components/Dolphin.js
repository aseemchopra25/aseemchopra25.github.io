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
    <div style={styles.container}>
      <div style={styles.panel}>
        <button onClick={handleHintClick}>Hint</button>
        <div style={{ marginTop: '20px' }}>
          {showHint && <p style={styles.hintText}>Shaggy 🐬, will you marry me?</p>}
          <input
            type="text"
            placeholder="Password"
            value={inputValue}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        {showFireworks && <Confetti />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  panel: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    color: '#000', // Ensuring text color is visible
  },
  hintText: {
    color: '#000',
    fontSize: '16px',
    fontWeight: '500',
  },
  input: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    color: '#000', // Ensuring text color is visible
  },
};

export default LoginPanel;
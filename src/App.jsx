import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [sanitizedValue, setSanitizedValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    setInputValue(inputValue);
    setSanitizedValue(sanitizedValue);
    navigator.clipboard.writeText(sanitizedValue);
  };

  return (
    <main>
      <label htmlFor="input-field">Input Sentence: </label>
      <input
        type="text"
        id="input-field"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Sanitized Sentence:</p>
      <p> {sanitizedValue}</p>
    </main>
  );
}

export default App;

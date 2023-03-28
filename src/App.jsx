import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [sanitizedValue, setSanitizedValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    setInputValue(inputValue);
    setSanitizedValue(sanitizedValue);
  };

  return (
    <main>
      <label htmlFor="input-field">Input Sentence:</label>
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

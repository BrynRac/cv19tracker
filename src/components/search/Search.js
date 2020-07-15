import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [word, setWord] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    return setQuery(value);
  };

  const updateWord = () => {
    return setWord(query);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
      <button onClick={updateWord}>Search</button>
      <p>{word}</p>
    </div>
  );
}

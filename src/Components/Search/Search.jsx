import React, { useState } from 'react';

const Search = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
        onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите запрос"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default Search;

import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Pesquisar produtos..."
    />
  );
}

export default SearchInput;

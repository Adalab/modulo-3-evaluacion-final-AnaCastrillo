import React from 'react';

function SearchInput(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleInput({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form>
      <input
        className="search-input"
        type="text"
        placeholder="¿A quién buscas?"
        onChange={handleInput}
      />
    </form>
  );
}

export default SearchInput;

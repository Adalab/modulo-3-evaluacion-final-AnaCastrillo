import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  let filteredCharacters = props.results.filter((character) =>
    character.name.toUpperCase().includes(props.inputValue.toUpperCase())
  );
  console.log(filteredCharacters);
  return (
    <>
      <ul className="cardList">
        {filteredCharacters.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </ul>
    </>
  );
}

export default CharacterList;

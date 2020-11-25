import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.scss';
import noChara from '../../images/noChara.jpg';

function CharacterList(props) {
  let filteredCharacters = props.results.filter((character) =>
    character.name.toUpperCase().includes(props.inputValue.toUpperCase())
  );
  if (filteredCharacters.length === 0) {
    return (
      <>
        <p className="error-message-list">
          No veo ningún personaje que coincida con la palabra
          <strong> {props.inputValue}</strong>
        </p>
        <div className="noChara">
          <img src={noChara} alt="no se ha encontrado nada" />
        </div>
      </>
    );
  }

  return (
    <>
      <ul className="cardList">
        {filteredCharacters
          .sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </ul>
    </>
  );
}

export default CharacterList;

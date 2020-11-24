import React from 'react';
import './CharacterCard.scss';

function CharacterCard(props) {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={props.character.img} alt={props.character.name} />
        </div>
        <div className="text-container">
          <h3>{props.character.name}</h3>
          <span>{props.character.species}</span>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;

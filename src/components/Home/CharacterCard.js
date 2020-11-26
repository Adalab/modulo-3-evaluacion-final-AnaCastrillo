import React from 'react';
import './CharacterCard.scss';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <li className="card">
          <div className="img-container">
            <img src={props.character.img} alt={props.character.name} />
          </div>
          <div className="text-container">
            <h3>{props.character.name}</h3>
            <span>{props.character.species} </span>
            <span>{props.character.gender}</span>
          </div>
        </li>
      </Link>
    </>
  );
}

export default CharacterCard;

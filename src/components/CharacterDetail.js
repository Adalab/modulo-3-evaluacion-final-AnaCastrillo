import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './CharacterDetail.scss';

function CharacterDetail(props) {
  const characterStatus =
    props.character.status === 'Dead' ? 'Dead ☠️' : 'Alive 🌱';
  const characterSpecies = props.character.species === 'Human' ? '👦' : '👽';
  return (
    <>
      <div className="detail">
        <img
          className="detail-img"
          src={props.character.img}
          alt={props.character.name}
        />
        <ul className="detail-text">
          <li>
            <h3 className="name">{props.character.name}</h3>
          </li>
          <li>Status: {characterStatus}</li>
          <li>Species: {characterSpecies}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episodes: {props.character.episodes}</li>
        </ul>
      </div>
      <Link to="/" className="return">
        Volver
      </Link>
    </>
  );
}
CharacterDetail.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  species: propTypes.string,
  status: propTypes.string,
  origin: propTypes.string,
  episodes: propTypes.number,
};

export default CharacterDetail;

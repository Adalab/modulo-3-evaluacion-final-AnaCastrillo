import React from 'react';
import SearchInput from './SearchInput';
import CharacterList from './CharacterList';
import './Home.scss';

function Home(props) {
  return (
    <>
      <div className="main">
        <SearchInput
          handleInput={props.handleInput}
          value={props.state.value}
        />
        <CharacterList
          results={props.state.data}
          inputValue={props.state.value}
          selectValue={props.state.select}
        />
      </div>
    </>
  );
}

export default Home;

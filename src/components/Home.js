import React from 'react';
import SearchInput from './SearchInput';
import CharacterList from './CharacterList';

function Home(props) {
  console.log(props.state);
  return (
    <>
      <SearchInput handleInput={props.handleInput} />
      <CharacterList
        results={props.state.data}
        inputValue={props.state.value}
      />
    </>
  );
}

export default Home;

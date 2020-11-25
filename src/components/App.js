import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getData from '../services/api.js';
import Header from './Header';
import Home from './Home/Home';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCharacterDetail = this.handleCharacterDetail.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  componentDidMount() {
    const lastData = JSON.parse(localStorage.getItem('data'));
    this.setState(lastData);

    getData().then((data) => {
      this.setState({
        data: data,
      });
    });
  }

  handleInput(value) {
    this.setState({
      value: value.value,
    });
  }

  handleCharacterDetail(props) {
    const characterId = parseInt(props.match.params.id);
    const thisCharacterDetail = this.state.data.find((character) => {
      return character.id === characterId;
    });
    if (thisCharacterDetail !== undefined) {
      return <CharacterDetail character={thisCharacterDetail} />;
    } else {
      return <NotFound />;
    }
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home state={this.state} handleInput={this.handleInput} />
          </Route>
          <Route path="/character/:id" render={this.handleCharacterDetail} />
        </Switch>
      </>
    );
  }
}

export default App;

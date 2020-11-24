import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import getData from '../services/api.js';
import Header from './Header';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      data: [],
      value: '',
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <>
        <Header />
        <Home state={this.state} handleInput={this.handleInput} />
      </>
    );
  }
}

export default App;

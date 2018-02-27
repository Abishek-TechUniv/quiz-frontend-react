import React from 'react';

import TopBar from '../TopBar';
import Login from '../Login';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      userName: '',
    };
  }

  login = () => {
    console.log('loggin in');
    this.setState({
      page: 'questions',
      userName: 'user',
    });
  }
  render = () => {
    if (this.state.page === 'login') {
      return (
        <div className="App-container">
          <TopBar />
          <Login click={() => this.login()} />
        </div>);
    } else if (this.state.page === 'questions') {
      return (
        <div className="App-container">
          Hello {this.state.userName}
        </div>);
    } return (
      <div className="App-container">
      SCOREBOARD
      </div>
    );
  }
}

export default App;

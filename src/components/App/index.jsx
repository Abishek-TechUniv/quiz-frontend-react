import React from 'react';
import axios from 'axios';

import TopBar from '../TopBar';
import QuestionContainer from '../QuestionContainer';
import Login from '../Login';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      userName: '',
      scores: [],
      questions: [],
    };
  }

  componentDidMount = () => {
    axios.get('/questions')
      .then((questions) => {
        if (questions.data.length === 0) {
          axios.put('/questions')
            .then(() => {
              axios.get('/questions')
                .then(qArr => this.setState({
                  questions: qArr.data,
                }));
            });
        } else { this.setState({ questions: questions.data }); }
      });
  }

  login = () => {
    axios.post('/users', { userName: this.state.userName });
    this.setState({
      page: 'questions',
    });
  }

  update = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }
  render = () => {
    if (this.state.page === 'login') {
      return (
        <div className="App-container">
          <TopBar />
          <Login click={() => this.login()} update={e => this.update(e)} />
        </div>);
    } else if (this.state.page === 'questions') {
      return (
        <div className="App-container">
          <TopBar welcome={`Hello ${this.state.userName}`} />
          <QuestionContainer questions={this.state.questions} />
          <button>Calculate</button>
        </div>);
    } return (
      <div className="App-container">
      SCOREBOARD
      </div>
    );
  }
}

export default App;

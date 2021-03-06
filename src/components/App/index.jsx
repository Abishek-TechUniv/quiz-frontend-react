import React from 'react';
import axios from 'axios';

import TopBar from '../TopBar';
import QuestionContainer from '../QuestionContainer';
import ScoreBoard from '../ScoreBoard';
import Login from '../Login';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      userName: '',
      score: 0,
      scores: [],
      questions: [],
      selected: [],
      canComplete: false,
    };
  }

  componentDidMount = () => {
    axios.get('/questions')
      .then((questions) => {
        if (questions.data.length === 0) {
          axios.post('/questions')
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
    if (this.state.userName !== '') {
      axios.post('/users', { userName: this.state.userName });
      axios.post('/users/response', { userName: this.state.userName })
        .then(result => this.setState({
          page: 'questions',
          selected: result.data,
        }));
    } else {
      this.setState({ page: 'login' });
    }
  }

  check = () => {
    axios.post('/users/response', { userName: this.state.userName })
      .then(result => ((result.data.length === this.state.questions.length) ?
        this.setState({ canComplete: true }) : null));
  }

  update = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }

  calculate = () => {
    const { userName } = this.state;
    axios.post('/calculate', { userName })
      .then(() => this.setState({
        page: 'scoreboard',
        userName,
      }))
      .then(() => axios.get('/scores')
        .then(({ data }) => {
          this.setState({
            scores: data,
            score: data.find(x => x.userName === this.state.userName).score,
          });
        }));
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
          <QuestionContainer
            check={this.check}
            questions={this.state.questions}
            userName={this.state.userName}
            responses={this.state.selected}
          />
          <div className="App-button-container">
            <button
              className="App-button"
              onClick={this.calculate}
              disabled={!this.state.canComplete}
            >Calculate
            </button>
          </div>
        </div>);
    } return (
      <div className="App-container">
        <TopBar welcome={`Hello ${this.state.userName}`} />
        <ScoreBoard
          userName={this.state.userName}
          scores={this.state.scores}
          score={this.state.score}
          total={this.state.questions.length}
        />
        <div className="App-button-container">
          <button
            className="App-button"
            onClick={() =>
                this.setState({ page: 'login', canComplete: false })}
          >Play Again
          </button>
        </div>
      </div>
    );
  }
}

export default App;

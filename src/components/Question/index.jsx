import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import './Question.css';

class Question extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: this.props.selected,
  //   };
  // }

  componentDidMount = () => {
    this.props.check();
  }

  click = (radio) => {
    axios.post('/response', { userName: this.props.userName, questionId: this.props.details.questionId, response: radio.currentTarget.value }).then(() => this.props.check());
  };

  options = () => this.props.details.options.map(element =>
    (
      <div className="Question-options" key={element}>
        <span className="Question-radio">
          <input
            type="radio"
            name={this.props.details.questionId}
            onChange={this.click}
            value={element}
            checked={
              this.props.selected.response === element ?
              'checked' :
               null}
          />
        </span>
        {element}
        <br />
      </div>
    ));

    render = () => (
      <div className="Question">
        <div className="Question-id">Question {this.props.id + 1}</div>
        <div className="Question-text">{this.props.details.question}</div>
        <div className="Question-options">{this.options()}</div>
      </div>);
}


Question.propTypes = {
  check: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    questionId: PropTypes.number,
    response: PropTypes.string,
  }),
  userName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  details: PropTypes.shape({
    questionId: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
};

Question.defaultProps = {
  selected: {},
};

export default Question;

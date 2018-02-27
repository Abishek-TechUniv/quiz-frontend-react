import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import './Question.css';

const Question = ({ details, id, userName }) => {
  const click = (radio) => {
    axios.post('/response', { userName, questionId: details.questionId, response: radio.currentTarget.value });
  };

  const options = () => details.options.map(element =>
    (
      <div className="Question-options" key={element}>
        <span className="Question-radio">
          <input
            type="radio"
            name={details.questionId}
            onChange={click}
            value={element}
          />
        </span>
        {element}
        <br />
      </div>
    ));
  return (
    <div className="Question">
      <div className="Question-id">Question {id + 1}</div>
      <div className="Question-text">{details.question}</div>
      <div className="Question-options">{options()}</div>
    </div>);
};

Question.propTypes = {
  userName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  details: PropTypes.shape({
    questionId: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
};


export default Question;

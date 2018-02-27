import PropTypes from 'prop-types';
import React from 'react';
import './Question.css';

const Question = ({ details, id }) => {
  const options = () => details.options.map(element =>
    (
      <div className="Question-options">
        <span className="Question-radio">
          <input type="radio" name={details.questionId} value={element} />
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
  id: PropTypes.number.isRequired,
  details: PropTypes.shape({
    questionId: PropTypes.number,
    questiom: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
};


export default Question;

import PropTypes from 'prop-types';
import React from 'react';

import Question from '../Question';

import './QuestionContainer.css';

const QuestionContainer = (props) => {
  const questions = props.questions.map((question, idx) =>
    (<Question
      id={idx}
      userName={props.userName}
      details={question}
      key={question.questionId}
      selected={props.responses.find(x => x.questionId === question.questionId)}
    />));
  return <div className="QuestionContainer">{questions}</div>;
};

QuestionContainer.propTypes = {
  userName: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default QuestionContainer;

import PropTypes from 'prop-types';
import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = (props) => {
  const scores = props.scores.slice(0, 5);
  const scoresDisplay = scores.map((scoreObj, idx) => (
    <div className={props.userName === scoreObj.userName ? 'Score-display Score-red' : 'Score-display'} key={scoreObj.userName}>
      <div>
        <span className="Score-index">{idx + 1}. </span>
        {scoreObj.userName}
      </div>
      <div>{scoreObj.score}</div>
    </div>));

  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard-yourScore">
        <div className="ScoreBoard-text">Your Score</div>
        <span className="ScoreBoard-myScore">{props.score}</span>
        <span className="ScoreBoard-total">/{props.total}</span>
      </div>

      <div className="ScoreBoard-leaderboard">
        <div className="ScoreBoard-leader-text">Leaderboard</div>
        <div className="ScoreBoard-allScores">
          {scoresDisplay}
        </div>
      </div>
    </div>
  );
};
ScoreBoard.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.number.isRequired,
  total: PropTypes.number,
  userName: PropTypes.string.isRequired,
};

ScoreBoard.defaultProps = {
  total: 12,
};

export default ScoreBoard;

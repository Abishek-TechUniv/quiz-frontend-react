import PropTypes from 'prop-types';
import React from 'react';
import './TopBar.css';

const TopBar = props => (
  <div className="TopBar">
    <div className="TopBar-title">
      {props.title}
    </div>
    <div className="TopBar-welcome">
      {props.welcome}
    </div>
  </div>
);

TopBar.propTypes = {
  title: PropTypes.string,
  welcome: PropTypes.string,
};

TopBar.defaultProps = {
  title: 'Quizzy',
  welcome: '',
};

export default TopBar;

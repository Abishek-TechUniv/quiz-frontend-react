import PropTypes from 'prop-types';
import React from 'react';
import './Login.css';

const Login = props => (
  <div className="Login">
    <div className="Login-card">
      <div className="Login-text">
        Welcome
        <br />
        to
        <br />
        <span className="Login-white">{props.name}</span>
      </div>
      <div className="Login-form">

        <div className="Login-title">Login</div>
        <div className="Login-user">
        Username
          <br />
          <input className="Login-input" type="text" />
        </div>
        <div className="Login-submit">
          <button className="Login-button" onClick={() => props.click()}>Login</button>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Login.defaultProps = {
  name: 'Quizzy!',
};

export default Login;

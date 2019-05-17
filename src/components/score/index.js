import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Score = ({ score }) => (
  <div>
    <span>Score: {score}</span>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

Score.defaultProps = {
  // size: 4,
};

export default Score;

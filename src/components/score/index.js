import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Score = ({ score }) => (
  <div className='score'>
    <p>Score: {score}</p>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

Score.defaultProps = {
  score: 0,
};

export default Score;

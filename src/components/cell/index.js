import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Cell = ({ number }) => (
  <div className='cell-wrapper' style={{minWidth: '25%', minHeight: '25%'}}>
    {number}
    {/* {number > 0 ? number : ''} */}
  </div>
);

Cell.propTypes = {
  size: PropTypes.string,
  number: PropTypes.number,
};

Cell.defaultProps = {
  number: 0,
};

export default Cell;

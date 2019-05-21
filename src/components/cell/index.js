import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Cell = ({ number }) => {
  const cellClasses = ['cell-wrapper', 'cell'];

  if(number > 0  && number <= 2048 )
    cellClasses.push([`cell-${number}`]);
  if(number > 2048)
    cellClasses.push(['cell-2048']);
  
  return (
    <div className={cellClasses.join(' ')}>
      {number > 0 ? number : ''}
    </div>
  );
};

Cell.propTypes = {
  number: PropTypes.number,
};

Cell.defaultProps = {
  number: 0,
};

export default Cell;

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { WIN_NUMBER } from '../../utils';

const Cell = ({ number }) => {
  const cellClasses = ['cell-wrapper', 'cell'];

  if(number > 0  && number <= WIN_NUMBER)
    cellClasses.push([`cell-${number}`]);
  if(number > WIN_NUMBER)
    cellClasses.push([`cell-${WIN_NUMBER}`]);

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

import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/board';
import Score from './components/score';

const App = () => {

  return (
    <>
      <Score/>
      <Board/>
    </>
  );
};

App.propTypes = {
  score: PropTypes.number,
};

App.defaultProps = {
  score: 0,
};


export default App;

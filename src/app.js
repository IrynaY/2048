import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from './components/board';
import Score from './components/score';

class App extends React.Component {
  render(){
    return (
      // <div>
      //   {this.props.matrix}
      // </div>
      <>
        <Score/>
        <Board/>
      </>
    );
  }
}

// App.propTypes = {
//   score: PropTypes.number,
// };

// App.defaultProps = {
//   score: 0,
// };

export default connect(
  state => ({
    matrix: state.test
  }),
  dispatch => ({
    onTest: val => {
      dispatch({type: 'TEST', payload: val});
    }
  })
)(App);

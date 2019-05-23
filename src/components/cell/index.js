import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { WIN_NUMBER } from '../../utils';

class Cell extends React.Component{

  state = {
    pushed: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { pushed } = this.state;
    const { pushed: nextPushedState } = nextState;
    const { number } = this.props;
    const { number: nextNumber } = nextProps;

    if(
      ((pushed === true) && (nextPushedState === false) && (number === nextNumber))
      || ((nextPushedState === true) && (pushed === false))
      || (nextNumber !== number)
    )
      return true;
      
    return false;
  }

  componentDidUpdate(prevProps) {
    const { number: prevNumver } = prevProps;
    const { number } = this.props;
    const { pushed } = this.state;

    if(pushed){
      setTimeout( () => {
        this.setState({pushed: false});
      }, 200);
    }

    if((prevNumver * 2) === number  && number !== 0 ){
      this.setState({pushed: true});
    }
  }

  render() {
    const { number } = this.props; 
    const { pushed } = this.state;
    const cellClasses = ['cell'];

    if(number > 0  && number <= WIN_NUMBER)
      cellClasses.push(`cell-${number}`);

    if(number > WIN_NUMBER)
      cellClasses.push(`cell-${WIN_NUMBER}`);

    if(pushed)
      cellClasses.push('pushed');

    return (
      <div className={cellClasses.join(' ')}>
        {number > 0 ? number : ''}
      </div> 
    );
  }
}

Cell.propTypes = {
  number: PropTypes.number,
};

Cell.defaultProps = {
  number: 0,
};

export default Cell;

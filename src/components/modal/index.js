import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.scss';

class Modal extends React.Component {

  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { isOpen, children, title } = this.props;

    return (
      <>
        {isOpen &&
          ReactDOM.createPortal(
            <div className='modal-overlay animated'>
              <div className='modal-window'>
                <p className='title'>{title}</p>
                {children}
              </div>
            </div>,
            document.body,
          )
        }
      </>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;

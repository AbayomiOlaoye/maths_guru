import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name, className, computeFunction, colSpan,
    } = this.props;
    return (
      <td className={className} colSpan={colSpan}>
        <button type="button" onClick={computeFunction} name={name}>{name}</button>
      </td>
    );
  }
}

Button.propTypes = {
  name: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  computeFunction: PropTypes.func.isRequired,
  colSpan: PropTypes.node.isRequired,
};

export default Button;

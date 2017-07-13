import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Forms.css';

export default class Input extends Component {
  render() {
    const { type, name } = this.props;

    return(
      <div className="root">
        <input type={type} name={name} />
      </div>
    );
  }
}

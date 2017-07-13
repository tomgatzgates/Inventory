import React, {Component }from 'react';
import PropTypes from 'prop-types';

import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import Panel from 'components/Panel/Panel';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input from 'components/Forms/Input';
import 'helpers/global.css';
import './ProductForm.css';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name}
                 onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input name="price" type="number" value={this.state.price}
                 onChange={this.handleInputChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

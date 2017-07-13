import React, {Component} from 'react';
import ProductForm from 'components/ProductForm/ProductForm';

export default class CreateProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.setState({loading: true});

    console.log(data);

    fetch('http://127.0.01:5000/products', {
      method: 'post',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      return response.json();
    }).then(json => {
      this.setState({loading: false});
      this.props.history.push(`/products/${json.id}`);
    }).catch(err =>  {
      console.log(err);
      this.setState({error: err});
    });
  }

  render() {
    return(
      <div>
        { this.state.loading
          ? 'Loading...'
          : <ProductForm onSubmit={this.handleSubmit}/>
        }
      </div>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import Product from 'components/ProductView/ProductView';

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.productId = props.match.params.productId;
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentWillMount() {
    fetch(`http://127.0.01:5000/products/${this.productId}`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      return response.json();
    }).then(json => {
      this.setState({loading: false, product: json});
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
          : <Product product={this.state.product} />
        }
      </div>
    )
  }
}

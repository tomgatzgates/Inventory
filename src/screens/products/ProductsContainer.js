import React, {Component} from 'react';
import ProductList from 'components/ProductList/ProductList';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import 'helpers/global.css';
export default class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      error: null,
      loading: true,
    };
  }

  componentWillMount() {
    fetch('http://127.0.01:5000/products', {
      method: 'get',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      return response.json();
    }).then(json => {
      this.setState({loading: false, products: json});
    }).catch(err =>  {
      console.log(err);
      this.setState({error: err});
    });
  }

  render() {
    if (this.state.loading) return <p>Loading...</p>

    return(
      <div>
        <div className="mbm mtm">
          <Button raised color="primary" href="/products/new">New product</Button>
        </div>

        <Paper>
          <ProductList products={this.state.products} />
        </Paper>
      </div>
    );
  }
}

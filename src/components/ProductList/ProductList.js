import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table, {
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import './ProductList.css';

const ProductList = ({products}) => {
  return(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Variants</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { products.map(product => {
          const { id, name, price, variants } = product;
          return(
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{variants.length}</TableCell>
              <TableCell>
                <Link to={`products/${id}`}>Show</Link>
              </TableCell>
            </TableRow>
          )})
        }
      </TableBody>
    </Table>
  );
};

export default ProductList;

import React from 'react';

const ProductView = ({product}) => {
  return(
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductView;

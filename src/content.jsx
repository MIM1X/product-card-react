import React from 'react';
import Gallery from './gallery';
import Price from './price';
import Quantity from './quantity';
import Delivery from './delivery';

function Content({ product }) {
  return (
    <div>
      <Gallery src={product.src} alt={product.alt}></Gallery>
      <div>
        <Price oldPrice={product.oldPrice} newPrice={product.newPrice}></Price>
        <Quantity quantity={1}></Quantity>
        <Delivery date={product.date}></Delivery>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Content;

import React from 'react';
import Gallery from '../gallery/gallery.jsx';
import Price from '../price/price.jsx';
import Quantity from '../quantity/quantity.jsx';
import Delivery from '../delivery/delivery.jsx';
import Popularity from '../popularity/popularity.jsx';
import Button from '../button/button';

function Content({ product }) {
  return (
    <div style={{ display: 'flex' }}>
      <Gallery src={product.src} alt={product.alt}></Gallery>
      <div>
        <Price oldPrice={product.oldPrice} newPrice={product.newPrice}></Price>
        <Quantity quantity={1}></Quantity>
        <Delivery date={product.date}></Delivery>
        <Button size='large'>Купить</Button>
        <Popularity count={product.comments.length}></Popularity>
      </div>
    </div>
  );
}

export default Content;

import React from 'react';
import Gallery from '../gallery/gallery.jsx';
import Price from '../price/price.jsx';
import Quantity from '../quantity/quantity.jsx';
import Delivery from '../delivery/delivery.jsx';
import Popularity from '../popularity/popularity.jsx';

function Content({ product }) {
  return (
    <div>
      <Gallery src={product.src} alt={product.alt}></Gallery>
      <div>
        <Price oldPrice={product.oldPrice} newPrice={product.newPrice}></Price>
        <Quantity quantity={1}></Quantity>
        <Delivery date={product.date}></Delivery>
        <button>Купить</button>
        <Popularity count={product.comments.length}></Popularity>
      </div>
    </div>
  );
}

export default Content;

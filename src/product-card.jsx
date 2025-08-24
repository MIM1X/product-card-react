import React from 'react';
import Title from './title';
import Article from './arcticle.jsx';
import Content from './content.jsx';
import Description from './description.jsx';

function ProductCard({ product }) {
  return (
    <section>
      <Title text={product.title}></Title>
      <Article text={product.number}></Article>
      <Content product={product}></Content>
      <Description text={product.description}></Description>
    </section>
  );
}

export default ProductCard;

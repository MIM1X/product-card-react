import React from 'react';
import Title from '../title/title.jsx';
import Article from '../article/article.jsx';
import Content from '../content/content.jsx';
import Description from '../description/description.jsx';
import Comments from '../comments/comments.jsx';

function ProductCard({ product }) {
  return (
    <section>
      <Title text={product.title}></Title>
      <Article text={product.number}></Article>
      <Content product={product}></Content>
      <Description text={product.description}></Description>
      <Comments comments={product.comments}></Comments>
    </section>
  );
}

export default ProductCard;

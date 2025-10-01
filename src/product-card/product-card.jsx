import React from 'react';
import { StyledProductPage, Header } from './styled.js';
import Title from '../title/title.jsx';
import Article from '../article/article.jsx';
import Content from '../content/content.jsx';
import Description from '../description/description.jsx';
import Comments from '../comments/comments.jsx';

function ProductCard({ product }) {
  return (
    <StyledProductPage>
      <Header>{product.title}</Header>
      <Article>{product.number}</Article>
      <Content product={product}></Content>
      <Description>{product.description}</Description>
      <Comments comments={product.comments}></Comments>
    </StyledProductPage>
  );
}

export default ProductCard;

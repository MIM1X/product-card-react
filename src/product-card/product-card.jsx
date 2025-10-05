import React from 'react';
import { StyledProductPage, Header } from './styled.js';
import Article from '../article/article.jsx';
import Content from '../content/content.jsx';
import Description from '../description/description.jsx';
import Comments from '../comments/comments.jsx';
import Tabs from '../tabs/tabs.jsx';

function ProductCard({ product }) {
  const tabs = [
    {
      title: 'Описание',
      content: <Description>{product.description}</Description>,
    },
    {
      title: 'Комментарии',
      content: <Comments comments={product.comments} />,
    },
  ];

  return (
    <StyledProductPage>
      <Header>{product.title}</Header>
      <Article>{product.number}</Article>
      <Content product={product}></Content>
      <Tabs tabs={tabs} activeTab={0} />
    </StyledProductPage>
  );
}

export default ProductCard;

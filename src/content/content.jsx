import React from 'react';
import Gallery from '../gallery/gallery.jsx';
import Popularity from '../popularity/popularity.jsx';
import {
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue,
} from './styled';

function Content({ product }) {
  return (
    <ProductWrapper>
      <Gallery src={product.src} alt={product.alt}></Gallery>
      <ProductInfo>
        <ProductInfoLine>
          <PageFullPrice
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        </ProductInfoLine>
        <ProductInfoLine>
          <PageCounter>{1}</PageCounter>
        </ProductInfoLine>
        <ProductInfoLine>
          <DeliveryValue>{product.date}</DeliveryValue>
        </ProductInfoLine>
        <BuyButton size='large'>Купить</BuyButton>
        <Popularity count={product.comments.length} />
      </ProductInfo>
    </ProductWrapper>
  );
}

export default Content;

import React, { useState } from 'react';
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
  const [productCount, setProductCount] = useState(1);
  return (
    <ProductWrapper>
      <Gallery src={product.src} alt={product.alt}></Gallery>
      <ProductInfo>
        <ProductInfoLine>
          <PageFullPrice
            oldPrice={product.oldPrice * productCount}
            newPrice={product.newPrice * productCount}
          />
        </ProductInfoLine>
        <ProductInfoLine>
          <PageCounter
            value={productCount}
            onChange={setProductCount}
            minValue={1}
          />
        </ProductInfoLine>
        <ProductInfoLine>
          <DeliveryValue>{product.date}</DeliveryValue>
        </ProductInfoLine>
        <BuyButton
          onClick={() => console.log('открытие окна оформления заказа')}
          size='large'
        >
          Купить
        </BuyButton>
        <Popularity count={product.comments.length} />
      </ProductInfo>
    </ProductWrapper>
  );
}

export default Content;

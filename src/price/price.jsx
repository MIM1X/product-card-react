import React from 'react';
import { PriceWrapper, StyledOldPrice, StyledPrice } from './styled.js';

function Price({ oldPrice = 0, newPrice }) {
  return (
    <PriceWrapper>
      Цена:{' '}
      {oldPrice === 0 || oldPrice <= newPrice ? null : (
        <StyledOldPrice>{oldPrice} ₽</StyledOldPrice>
      )}{' '}
      <StyledPrice>{newPrice} ₽</StyledPrice>
    </PriceWrapper>
  );
}

export default Price;

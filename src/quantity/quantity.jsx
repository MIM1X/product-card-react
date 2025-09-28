import React from 'react';
import Button from '../button/button';
import { StyledCounter, Value } from './styled';

function Quantity({ quantity }) {
  return (
    <StyledCounter>
      Количество:
      <Button size='small'>-</Button>
      <Value>{quantity}</Value>
      <Button size='small'>+</Button>
    </StyledCounter>
  );
}

export default Quantity;

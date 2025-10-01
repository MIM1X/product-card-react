import React from 'react';
import Button from '../button/button';
import { StyledCounter, Value } from './styled';

function Quantity({ children }) {
  return (
    <StyledCounter>
      Количество:
      <Button size='small'>-</Button>
      <Value>{children}</Value>
      <Button size='small'>+</Button>
    </StyledCounter>
  );
}

export default Quantity;

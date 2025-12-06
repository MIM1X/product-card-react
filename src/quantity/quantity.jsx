import React, { useState } from 'react';
import Button from '../button/button';
import { StyledCounter, Value } from './styled';

function Quantity({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;

  return (
    <StyledCounter className={className}>
      Количество:
      <Button
        onClick={() => onChange && onChange(value - 1)}
        size='small'
        disabled={isDisabledMinus}
      >
        -
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button onClick={() => onChange && onChange(value + 1)} size='small'>
        +
      </Button>
    </StyledCounter>
  );
}

export default Quantity;

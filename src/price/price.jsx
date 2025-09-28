import React from 'react';

function Price({ oldPrice = 0, newPrice }) {
  return (
    <p>
      Цена:{' '}
      {oldPrice === 0 || oldPrice <= newPrice ? null : <del>{oldPrice} ₽</del>}{' '}
      <b>{newPrice} ₽</b>
    </p>
  );
}

export default Price;

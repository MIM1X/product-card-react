import React from 'react';

function Price({ oldPrice, newPrice }) {
  return (
    <p>
      Цена: <del>{oldPrice} ₽</del> <b>{newPrice} ₽</b>
    </p>
  );
}

export default Price;

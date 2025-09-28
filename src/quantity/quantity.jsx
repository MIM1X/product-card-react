import React from 'react';

function Quantity({ quantity }) {
  return (
    <p>
      Количество: <button>-</button>
      {quantity} <button>+</button>
    </p>
  );
}

export default Quantity;

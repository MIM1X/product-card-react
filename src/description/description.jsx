import React from 'react';
import Button from '../button/button';

function Description({ children }) {
  return (
    <div>
      <h2>Описание</h2>
      {children}
      <Button>Подробнее</Button>
    </div>
  );
}

export default Description;

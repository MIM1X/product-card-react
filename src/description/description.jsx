import React from 'react';
import Button from '../button/button';

function Description({ children }) {
  return (
    <div>
      {children}
      <Button>Подробнее</Button>
    </div>
  );
}

export default Description;

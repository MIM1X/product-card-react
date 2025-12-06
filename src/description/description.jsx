import React from 'react';
import { DescriptionButton } from './styled';

function Description({ children }) {
  return (
    <div>
      {children}
      <DescriptionButton
        onClick={() => console.log('скрытие/открытие всего текста')}
      >
        Подробнее
      </DescriptionButton>
    </div>
  );
}

export default Description;

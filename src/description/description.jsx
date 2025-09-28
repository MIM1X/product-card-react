import React from 'react';

function Description({ text }) {
  return (
    <div>
      <h2>Описание</h2>
      {text}
      <button>Подробнее</button>
    </div>
  );
}

export default Description;

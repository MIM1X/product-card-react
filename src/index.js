import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductCard from './product-card.jsx';
import { product } from './mock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<ProductCard product={product}></ProductCard>}
  </React.StrictMode>
);

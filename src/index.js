import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductCard from './product-card/product-card.jsx';
import { product } from './mock';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductCard product={product}></ProductCard>
    </ThemeProvider>
  </React.StrictMode>
);

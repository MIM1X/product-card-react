import styled from 'styled-components';
import { P } from '../elements';
import Button from '../button/button';
import Counter from '../quantity/quantity';
import FullPrice from '../price/price';
import Delivery from '../delivery/delivery';

const valueStyle = `
  display: inline-flex;
  margin-left: 20px;
  color: #333;
`;

export const ProductWrapper = styled.section`
  display: flex;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  margin-left: 20px;
  border-left: 1px solid #888;
  box-sizing: border-box;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const ProductInfoLine = styled(P)`
  color: #666;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const DeliveryValue = styled(Delivery)`
  ${valueStyle}
  color: green;
`;

export const BuyButton = styled(Button)`
  margin-top: 40px;
`;

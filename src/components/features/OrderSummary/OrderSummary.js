import React from 'react';
import PropTypes from 'Prop-Types';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderSummary.scss';

const OrderSummary = ({ tripCost, options }) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.object,
  options: PropTypes.object,
};

export default OrderSummary;

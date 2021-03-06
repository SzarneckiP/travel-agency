import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, limits, setOptionValue, price }) => (
  <div className={styles.number}>
    {console.log(currentValue)}
    <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}></input>
    {' '}{formatPrice(price)}
  </div>
);


OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,

};


export default OrderOptionNumber;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionText = ({ currentValue, setOptionValue, name }) => (

  <div className={styles.component}>
    <input className={styles.input} type='text' value={currentValue} name={name} placeholder={'Text here'} onChange={event => setOptionValue(event.currentTarget.value)}></input>
  </div>

);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;

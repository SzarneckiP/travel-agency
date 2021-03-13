import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React from 'react';
import PropTypes, { node, string } from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';



const OrderOptionDate = ({ currentValue, setOptionValue, name }) => (

  <div className={styles.component}>
    <DatePicker className={styles.input} type='data' selected={currentValue} name={name} placeholderText={'Select a date'} onChange={date => setOptionValue(date)} />
  </div>

);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.oneOfType(string, node),
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;

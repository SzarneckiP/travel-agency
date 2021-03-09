import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import OrderOptionData from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionData,
};

const OrderOption = ({ name, type, id, setOrderOption, ...otherProps }) => {
  const OptionComponent = optionTypes[type]; //Wartością stałej OptionComponent będzie jeden z komponentów z obiektu optionTypes.
  if (!OptionComponent) { //Wykorzystujemy go w kodzie JSX i przekazujemy mu wszystkie propsy otrzymane przez OrderOption, poza name i type.
    return null;  //Gdyby z jakiegokolwiek powodu w pricing.json znalazła się opcja typu, który nie jest obsługiwany przez nasz kod, komponent OrderOption zwróci null, czyli niczego nie będzie renderował na stronie.
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({ [id]: value })}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderOption;

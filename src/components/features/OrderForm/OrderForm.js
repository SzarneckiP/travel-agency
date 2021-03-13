import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost, tripName, tripId, country) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    country: country.name,
    tripName,
    totalCost,
    ...options,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (options.name == '' || options.contact == '') {
    alert('Fill empty cells, please');
  } else {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId, country }) => (

  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption
          {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}

    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, country)}>Order now!</Button>
    </Col>

  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  country: PropTypes.string,
};

export default OrderForm;

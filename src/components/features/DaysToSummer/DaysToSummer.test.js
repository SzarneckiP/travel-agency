import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

const select = {
  description: '.description',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists()).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);       //wyrażenie super odwołuje się do konstruktora klasy-rodzica (w tym przypadku Date).
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDay = (day, expectedDescription) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDay('2021-06-21', '');
  checkDescriptionAtDay('2021-06-25', '');
  checkDescriptionAtDay('2021-09-23', '');
});

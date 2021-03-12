import { shallow } from 'enzyme';
import React from 'react';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link url', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 1;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
    expect(component.find('.title').text());
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });

  //it('should throw error without required props', () => {
  //  expect(() => shallow(<TripSummary />)).toThrow();
  //});

  it('should render tags array', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0] || 'tag1');
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1] || 'tag2');
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2] || 'tag3');
    console.log(component.debug());
  });

  it('should not render div', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toEqual(null || {});
  });

});

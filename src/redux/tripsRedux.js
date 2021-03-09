/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration) {
    const DurationFrom = filters.duration.from;
    const DurationTo = filters.duration.to;

    output = output.filter((trip) => trip.days >= DurationFrom && trip.days <= DurationTo);
  }
  // TODO - filter by tags
  if (filters.tags) {
    output = output.filter(trip => filters.tags.every((tag) => trip.tags.includes(tag)));
  }
  // TODO - sort by cost descending (most expensive goes first)
  output = output.sort((trip1, trip2) => {
    const cost1 = parseInt(trip1.cost.replace('$', ''));
    const cost2 = parseInt(trip2.cost.replace('$', ''));
    //console.log('trip1', trip1);
    //console.log('trip2', trip2);
    //console.log('cost1', cost2);
    //console.log('cost2', cost2);
    return cost2 - cost1;
  });

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter((trip) => trip.id == tripId);

  // DONE - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter((trip) => trip.country.code == countryCode);

  // DONE - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */

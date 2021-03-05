/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

export const CHANGE_TAG_ADD = createActionName('CHANGE_TAG_ADD');
export const CHANGE_TAG_REMOVE = createActionName('CHANGE_TAG_REMOVE');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeTagsAdd = payload => ({ payload, type: CHANGE_TAG_ADD });
export const changeTagsRemove = payload => ({ payload, type: CHANGE_TAG_REMOVE });

export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_TAG_ADD:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case CHANGE_TAG_REMOVE:
      return {
        ...statePart,

      };

    case CHANGE_DURATION:
      return {
        ...statePart,
        dispatchTo: { ...statePart.duration, to: action.payload },
        dispatchFrom: { ...statePart.duration, from: action.payload },

      };
    /*case CHANGE_DURATION_FROM:
  return {
    ...statePart,
    duration: { ...statePart.duration, from: action.payload },
  };
case CHANGE_DURATION_TO:
  return {
    ...statePart,
    duration: { ...statePart.duration, to: action.payload },
  };*/
    default:
      return statePart;
  }
}

import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeTagsAdd, changeDurationFrom, changeDurationTo, changeTagsRemove, changeDuration } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeTagsAdd: tag => dispatch(changeTagsAdd(tag)),
  changeTagsRemove: tag => dispatch(changeTagsRemove(tag)),

  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
  changeDuration: (value, type) => dispatch(changeDuration(value, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

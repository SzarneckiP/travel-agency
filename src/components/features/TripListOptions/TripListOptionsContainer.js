import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeTagsAdd, changeDurationFrom, changeDurationTo, changeTagsRemove } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeTagsAdd: tags => dispatch(changeTagsAdd(tags)),
  changeTagsRemove: tags => dispatch(changeTagsRemove(tags)),

  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

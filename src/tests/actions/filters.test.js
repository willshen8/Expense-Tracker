import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('Should generate set end date action object',() => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('Should generate text filter action object',() => {
  const action = setTextFilter('test-filter');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test-filter'
  });
});

test('Should generate empty text filter action object',() => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('Should generate sortByAmount object',() => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('Should generate sortByDate object',() => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

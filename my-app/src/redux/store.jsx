import { createStore } from 'redux';

const initialState = {
  jobs: [],
  filters: {
    search: '',
    location: '',
    category: '',
    employmentType: '',
    isRemote: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

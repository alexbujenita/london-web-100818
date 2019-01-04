import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, UPDATE_FILTER } from './actions/types';

// Equivalent React State
// state = {
//   paintings: [{}...],
//   selectedPaintingId: null
// }

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.id)
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      return action.payload.length > 0 ? action.payload[0].id : null
    case DELETE_PAINTING:
      return null
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter
    default:
      return state
  }
}



const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  filter: filterReducer
});

// store.getState() === {
//   paintings: [],
//   activePainting: 2
// }


// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;

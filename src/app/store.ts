import { createStore, combineReducers } from 'redux';

import overallReducer from '../features/store/overallStore';

const rootReducer = combineReducers({
 navigation: overallReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
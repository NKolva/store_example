import { createStore, combineReducers } from 'redux';

import navigationReducer from '../features/store/navigationStore';

const rootReducer = combineReducers({
 navigation: navigationReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
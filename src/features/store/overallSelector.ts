import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { overallState } from './overallStore';

const getState = (state: RootState): overallState => state.navigation;

export const getNavigationItem = createSelector(getState, (state: overallState) => state.navigationItem);
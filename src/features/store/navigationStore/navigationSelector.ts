import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

import { navigationState } from './navigationStore';

const getState = (state: RootState): navigationState => state.navigation;

export const getNavigationItem = createSelector(getState, (state: navigationState) => state.navigationItem);
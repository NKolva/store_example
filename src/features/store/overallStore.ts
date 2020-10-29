import { createSlice } from '@reduxjs/toolkit';

import { NavigationItem } from './types';

export interface overallState {
  navigationItem: NavigationItem[];
}

const initialState: overallState = {
    navigationItem: [
        {title: 'Smartphones', linkTo: "/se-smartphones"},
        {title: 'Discount', linkTo: "/se-discount"},
        {title: 'Laptops', linkTo: "/se-laptops"},
    ],
};

export const reducerSlice = createSlice({
  name: 'navigationReducer',
  initialState,
  reducers: {
    
  },
});


export default reducerSlice.reducer;

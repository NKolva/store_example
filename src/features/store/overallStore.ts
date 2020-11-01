import { createSlice } from '@reduxjs/toolkit';

import { NavigationItem, MobileDevices } from './types';

import iPhone12 from '../../assets/mobile/iPhone12.jpg';

export interface overallState {
  navigationItem: NavigationItem[];
  mobileDevices: MobileDevices[];
}

const initialState: overallState = {
    navigationItem: [
        {title: 'Smartphones', linkTo: "/se-smartphones"},
        {title: 'Laptops', linkTo: "/se-laptops"},
        {title: 'Discount', linkTo: "/se-discount"},
    ],
    mobileDevices: [
      {
        name: 'iPhone 12',
        diagonal: '6.1',
        memory: '128 GB',
        serialNumber: 'SN233211232',
        productNumber: 'iPhone12(KB1234567)',
        characteristics: '',
        width: '71.5 mm',
        height: '146.7 mm',
        depth: '7.4 mm',
        weight: '162g',
        image: iPhone12,
      }
    ]
};

export const reducerSlice = createSlice({
  name: 'overallReducer',
  initialState,
  reducers: {
    
  },
});


export default reducerSlice.reducer;

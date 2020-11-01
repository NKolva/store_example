import React from 'react';
import { useSelector } from 'react-redux';

import { getMobileDevices } from '../../store';

import { FlipCard } from '../../../components/FlipCard/FlipCard';

import './smartphones.scss'

export const Smartphones: React.FC = () => {

    const mobileDevices = useSelector(getMobileDevices);

    return (
        <div className="smartphones">
            <div className="smartphones__content">
                Smartphones
                {mobileDevices.map(item => {
                    return <FlipCard key={item.serialNumber} name={item.name} img={item.image} />
                })}
            </div>
        </div>
    )
}
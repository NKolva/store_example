import React from 'react';

import './navigationItem.scss';

interface Props {
    title: string;
}

export const NavigationItem: React.FC<Props> = ({title}) => {
    return (
        <div className="navigation">
            <div className="navigation__content">
                <div className="navigation__title">{title}</div>
                <div className="navigation__icon">
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            </div>
        </div>
    )
}
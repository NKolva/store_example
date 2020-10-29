import React from 'react';
import { Link } from 'react-router-dom';

import './navigationItem.scss';

interface Props {
    title: string;
    linkTo: string;
}

export const NavigationItem: React.FC<Props> = ({ title, linkTo }) => {
    return (
        <div className="navigation">
            <Link className="navigation__link" to={linkTo}>
                <div className="navigation__title">{title}</div>
                <div className="navigation__icon">
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            </Link>
        </div>
    )
}
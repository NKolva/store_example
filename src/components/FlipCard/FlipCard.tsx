import React, { useMemo } from 'react';
import classnames from 'classnames';

import { isMobile } from '../../utils/device';


import './flipCard.scss'

interface Props {
    name?: string;
    img: string;
}

export const FlipCard: React.FC<Props> = ({ name, img }) => {
    const mobile = useMemo(() => isMobile, []);

    const titleStyle = classnames('flip-card__front-title', {
        'flip-card__front-title-mobile': mobile
    })

    return (
        <div className="flip-card">
            <div className="flip-card__inner">
                <div className="flip-card__front">
                    <div className="flip-card__front-content">
                        <div className={titleStyle}>
                            {name}
                            {mobile && (
                                <i className="material-icons flip-card__icon"> arrow_forward </i>
                            )}
                        </div>
                    </div>
                    <img src={img} alt="Avatar" style={{width: '180px', height: '230px'}} />
                </div>
                <div className="flip-card__back">
                    <div className="flip-card__back-content">Characteristics</div>
                    <div className="flip-card__back-footer">
                        <button>ADD TO CARD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
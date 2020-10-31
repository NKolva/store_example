import React, { PropsWithChildren } from 'react';
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group';

import './animation.scss'

interface Props {
    animationType: 'sidebarLeft' | 'modal'
    inValue: boolean;
}

export const Animation: React.FC<PropsWithChildren<Props>> = ({ children, animationType, inValue }) => {

    const animationStyle = classnames({
        'sidebar-left': animationType === 'sidebarLeft',
        'modal': animationType === 'modal'
    });

    return (
        <CSSTransition
            in={inValue}
            timeout={300}
            classNames={animationStyle}
            unmountOnExit>
                {children}
        </CSSTransition>
    )
}
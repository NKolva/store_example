import React, { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import classnames from 'classnames'

import './animation.scss'

interface Props {
    animationType: 'sidebarLeft' | 'modal'
    inValue: boolean;
}

export const Animation: React.FC<PropsWithChildren<Props>> = ({ children, animationType, inValue }) => {

    const ref = useRef(null);

    const animationStyle = classnames({
        'sidebar-left': animationType === 'sidebarLeft',
        'modal': animationType === 'modal'
    });

    return (
            <CSSTransition
                in={inValue}
                timeout={300}
                classNames={animationStyle}
                unmountOnExit
                nodeRef={ref}>
                    <div className="children" ref={ref}>
                        {children}
                    </div>
            </CSSTransition>
    )
}
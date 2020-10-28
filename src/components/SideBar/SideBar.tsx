import React, { PropsWithChildren } from 'react';

import classnames from 'classnames';

import './sidebar.scss';

interface Props {
    position: 'right' | 'left';
    title: string;
    onClose?: () => void;
}

export const Sidebar: React.FC<PropsWithChildren<Props>> = ({ position, onClose, title, children }) => {

    const sideBarStyle = classnames('sidebar', {
        'sidebar-right': position === 'right',
        'sidebar-left': position === 'left'
    });

    const closeIconStyle = classnames('material-icons sidebar__close-icon', {
        'material-icons sidebar__close-icon-right': position === 'right',
        'material-icons sidebar__close-icon-left': position === 'left',
    });

    return (
        <div className={sideBarStyle}>
            <div className="sidebar-content">
                <div className="sidebar__header">
                    <div className="sidebar__title">{title}</div>
                    <i onClick={onClose} className={closeIconStyle}>close</i>
                </div>
                <div className="sidebar__children">
                    {children}
                </div>
            </div>
        </div>
    );
};
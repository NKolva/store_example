import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getNavigationItem } from '../store/navigationStore';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Modal } from '../../components/Modal/Modal';
import { NavigationItem } from '../../components/NavigationItem/NavigationItem';

import './header.scss';

export const Header: React.FC = () => {
    const navigationItem = useSelector(getNavigationItem);

    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [sidebarPosition, setSidebarPosition] = useState('');
    const [sidebarTitle, setSidebarTitle] = useState('');

    const onOpenSidebar = useCallback((position, title) => (): void => {
        setShowSidebar(true);
        setSidebarPosition(position);
        setSidebarTitle(title);
    }, []);

    const onCloseSidebar = useCallback(() => {
        setShowSidebar(false);
    }, []);

    const showModalHandler = useCallback(() => {
        setShowModal(prev => !prev);
    }, []);

    const renderNavigationItem = (): JSX.Element => {
        return (
            <>
                {
                    navigationItem.map(item => {
                        return <NavigationItem key={item.title} title={item.title} />
                    })
                }
            </>
        )
    };

    return (
        <>
            {showSidebar && (
                <div className="open-animation">
                    <Sidebar 
                        transitionValue={showSidebar}
                        position={sidebarPosition} 
                        title={sidebarTitle} 
                        onClose={onCloseSidebar}>
                            {renderNavigationItem()}
                    </Sidebar>
                </div>
            )}

            {showModal && (
                <div className="open-animation">
                    <Modal onClose={showModalHandler}/>
                </div>
            )}

            <div className="header">
                <div className="header__content">
                    <i  className="material-icons header__icon" 
                        onClick={onOpenSidebar('left', 'Menu')}>menu</i>
                    <div>LOGO</div>
                    <i  className="material-icons header__icon" 
                        onClick={showModalHandler}>shopping_cart</i>
                </div>
            </div>
        </>
    )
}
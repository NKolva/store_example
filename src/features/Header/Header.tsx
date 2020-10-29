import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getNavigationItem } from '../store';

import { isMobile } from '../../utils/device';

import { Animation } from '../../components/Animation/Animation';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Modal } from '../../components/Modal/Modal';
import { NavigationItem } from '../../components/NavigationItem/NavigationItem';

import './header.scss';

export const Header: React.FC = () => {
    const navigationItem = useSelector(getNavigationItem);
    
    const [showModalTransition, setShowModalTransition] = useState(false);
    const [showSideTransition, setShowSideTransition] = useState(false);

    const mobile = useMemo(() => isMobile, []);

    const showSidebarHandler = useCallback(() => {
        setShowSideTransition(prev => !prev);
    }, []);

    const showModalHandler = useCallback(() => {
        setShowModalTransition(prev => !prev);
    }, []);

    const renderNavigationItem = (): JSX.Element => {
        return (
            <>
                {
                    navigationItem.map(item => {
                        return <NavigationItem key={item.title} title={item.title} linkTo={item.linkTo} />
                    })
                }
            </>
        )
    };

    return (
        <>
            <Animation inValue={showSideTransition} animationType="sidebarLeft">
                <Sidebar 
                    position="left" 
                    title="Menu" 
                    onClose={showSidebarHandler}>
                        {renderNavigationItem()}
                </Sidebar>
            </Animation>

            <Animation inValue={showModalTransition} animationType="modal">
                <Modal onClose={showModalHandler}/>
            </Animation>

            <div className="header">
                <div className="header__content">
                    {mobile && (
                        <i  className="material-icons header__icon" 
                            onClick={showSidebarHandler}>menu</i>
                    )}
                    <div>LOGO</div>
                    <i  className="material-icons header__icon" 
                        onClick={showModalHandler}>shopping_cart</i>
                </div>
            </div>
        </>
    )
}
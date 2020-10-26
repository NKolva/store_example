import React, { useState, useCallback } from 'react';
import { SideBar } from '../../components/SideBar/SideBar';

import './header.scss'

export const Header: React.FC = () => {

    const [showSideBar, setShowSideBar] = useState(false);
    const [sideBarPosition, setSideBarPosition] = useState('');
    const [sideBarTitle, setSideBarTitle] = useState('');

    const rightSideBarHandler = useCallback(() => {
        setShowSideBar(prev => !prev);
        setSideBarPosition("right");
        setSideBarTitle('Shopping Cart');
    }, []);

    const leftSideBarHandler = useCallback(() => {
        setShowSideBar(prev => !prev);
        setSideBarPosition("left");
        setSideBarTitle('Menu');
    }, []);

    const renderContentByPosition = (): JSX.Element => {
        return (
            sideBarPosition === 'right' ? <div>Shopping Card Item</div> : <div>Navigation</div>
        )
    }

    return (
        <>
            {showSideBar && (
                <SideBar 
                    position={sideBarPosition} 
                    title={sideBarTitle} 
                    onClose={rightSideBarHandler || leftSideBarHandler}>
                        {renderContentByPosition()}
                </SideBar>
            )}

            <div className="header">
                <div className="header__content">
                    <i className="material-icons header__icon" onClick={leftSideBarHandler}>menu</i>
                    <div>LOGO</div>
                    <i className="material-icons header__icon" onClick={rightSideBarHandler}>shopping_cart</i>
                </div>
            </div>
        </>
    )
}
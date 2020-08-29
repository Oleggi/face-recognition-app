import React from 'react';
import style from './Header.module.css';
import Navigatin from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className={style.container}>
            <Logo />
            <Navigatin />
        </header>
    )
};

export default Header;
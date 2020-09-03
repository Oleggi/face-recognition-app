import React from 'react';
import style from './Header.module.css';
import Navigatin from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({ toggleIsAuth, isAuth }) => {
    return (
        <header className={style.container}>
            <Logo />
            <Navigatin isAuth={isAuth}/>
        </header>
    )
};

export default Header;
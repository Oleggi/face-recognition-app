import React from 'react';
import style from "../Header/Header.module.css";
import { NavLink } from 'react-router-dom';

const Navigation = ({ toggleIsAuth, isAuth }) => {
    return (
        <div className={style.nav}>
            <NavLink to={'/login'}>
                {isAuth ? (
                    <button onClick={toggleIsAuth} type="button" className="btn btn-primary">Sign Out</button>
                ) :
                (
                    <div>
                        <button type="button" className="btn btn-primary">Sign in</button>
                        <button type="button" className="btn btn-primary">Register</button>
                    </div>
                )
            }
            </NavLink>
        </div>
    )
};

export default Navigation;
import React from 'react';
import style from "../Header/Header.module.css";

const Navigation = (props) => {
    return (
        <div className={style.nav}>
            <button type="button" class="btn btn-primary">Sign Out</button>
        </div>
    )
};

export default Navigation;
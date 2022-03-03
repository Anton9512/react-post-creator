import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <Link className={classes.navbar__btns} to="/about">О приложении</Link>
                <Link className={classes.navbar__btns} to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;

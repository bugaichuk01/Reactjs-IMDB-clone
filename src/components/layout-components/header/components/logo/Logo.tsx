import React from 'react';
import {Link} from "react-router-dom";
import styles from './Logo.module.scss';
import logo from '../../../../../assets/images/logo.png'

export const Logo = () => {
    return (
        <Link to={'/'} className={styles.logo_wrapper}>
            <img src={logo} alt='logo' className={styles.logo} />
        </Link>
    );
}

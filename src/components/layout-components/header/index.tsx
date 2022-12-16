import React from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import {Logo} from "./components/logo/Logo";
import {SearchGroup} from "./components/search-group/SearchGroup";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={cn('container', styles.container)}>
                <Logo/>
          {/*      <Link to={'/films'}><span style={{color: 'white'}}>Каталог</span></Link>
                <Link to={'/best-films'}><span style={{color: 'white'}}>Топ 250</span></Link>
                <Link to={'/await-films'}><span style={{color: 'white'}}>Ожидаемое</span></Link>
                <Link to={'/popular-films'}><span style={{color: 'white'}}>Популярное</span></Link>*/}
                <SearchGroup/>
            </div>
        </header>
    );
}
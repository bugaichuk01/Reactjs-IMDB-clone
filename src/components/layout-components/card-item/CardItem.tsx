import React from 'react';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import styles from "./CardItem.module.scss";
import cn from 'classnames';

interface ICardItem {
    link: string;
    name?: string;
    src?: string;
    description?: string;
    footerClassName?: string;
    rating?: number;
    children?: React.ReactNode
}

export const CardItem: React.FC<ICardItem> = ({link, name, description, src, rating, footerClassName, children}) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={link}>
                <img className={styles.image} src={src} alt={name}/>

                {rating && (
                    <div className={styles.rating_group}>
                        <FaStar className={styles.icon}/>
                        <span className={styles.rating}>{rating}</span>
                    </div>
                )}

                <div className={cn(styles.footer, footerClassName)}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.description}>{description}</span>
                </div>
            </Link>
            {children}
        </div>

    );
};


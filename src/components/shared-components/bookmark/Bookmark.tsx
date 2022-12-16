import React from 'react';
import styles from './Bookmark.module.scss';

export const Bookmark = () => {
    return (
        <div className={styles.bookmark}>
            <svg className={styles.ribbon} viewBox='0 0 24 34'>
                <polygon className={styles.polygon} points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"/>
            </svg>
            <div className={styles.ribbon_icon}>
                <svg className={styles.ribbon_icon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                </svg>
            </div>
        </div>
    );
}


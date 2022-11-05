import React, {PropsWithChildren} from 'react';
import styles from "./EnumInfo.module.scss";

export const EnumInfo = ({children}: PropsWithChildren<{}>) => {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    );
}


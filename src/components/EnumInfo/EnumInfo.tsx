import React, {PropsWithChildren} from 'react';
import styles from "./EnumInfo.module.scss";
import cn from 'classnames';

export const EnumInfo = ({children}: PropsWithChildren<{}>) => {
    return (
        <ul className={cn('list', styles.list)}>
            {children}
        </ul>
    );
}


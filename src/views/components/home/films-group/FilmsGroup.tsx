import React from 'react';
import styles from './FilmsGroup.module.scss';
import {IMovie} from "../../../../types/IMovie";
import {Content} from "@/layout-components/content/Content";
import {IBaseQuery} from "../../../../types/IQuery";

interface FilmsGroupTypes {
    title: string;
    data: IBaseQuery<IMovie> | undefined;
}

export const FilmsGroup: React.FC<FilmsGroupTypes> = ({data, title}) => {
    return (
        <Content data={data}>
            <div className={styles.wrapper}>
                <div className={styles.films}>
                    {data?.[data.items ? 'items' : 'films']?.slice(0, 3).map((item, index) => (
                        <img key={index} src={item.posterUrl} alt={item.nameRu}/>
                    ))}
                </div>
                <span className={styles.description}>{title}</span>
            </div>
        </Content>
    );
}
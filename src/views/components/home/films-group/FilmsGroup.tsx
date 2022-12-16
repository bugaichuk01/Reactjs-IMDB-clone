import React from 'react';
import styles from './FilmsGroup.module.scss';
import {IFilm} from "../../../../types/IFilm";
import {Content} from "@/layout-components/content/Content";
import {IFilmTop} from "../../../../types/IFilmTop";

interface FilmsGroupTypes {
    title: string;
    data?: IFilm[] | IFilmTop[];
}

export const FilmsGroup: React.FC<FilmsGroupTypes> = ({data, title}) => {
    return (
        <Content data={data}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.films}>
                        {data?.slice(0, 3).map((item, index) => (
                            <img key={index} src={item.posterUrl} alt={item.nameRu}/>
                        ))}
                    </div>
                </div>
                <span className={styles.description}>{title}</span>
            </div>
        </Content>
    );
}
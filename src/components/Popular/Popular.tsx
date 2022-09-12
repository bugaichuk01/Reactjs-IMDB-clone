import React from 'react';
import styles from './Popular.module.scss';
import {UiButton} from "../UI/UIButton/UIButton";
import {IMovies} from "../../types/IMovie";
import {Slider} from "../Slider/Slider";
import {deleteTrashFilms} from "../../_helpers/deleteTrashFilms";
import {FilmItem} from "../FilmItem/FilmItem";

interface PopularTypes {
    data: IMovies | undefined;
    title: string
}

export const Popular: React.FC<PopularTypes> = ({data, title}) => {

    return (
        <div className='container'>
            <div className={styles.top}>
                <h1>{title}</h1>
                <UiButton style={styles.button} text='Смотреть все'/>
            </div>

            <Slider
                itemsNumber={6}
                data=
                    {deleteTrashFilms(data?.items)?.map((item) => (
                        <FilmItem key={item.imdbId} item={item}/>
                    ))}
            />
        </div>
    );
}


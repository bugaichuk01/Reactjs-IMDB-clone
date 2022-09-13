import React from 'react';
import styles from './Popular.module.scss';
import {IMovies} from "../../types/IMovie";
import {Button} from "../UI/Button/Button";
import {Slider} from "../Slider/Slider";
import {FilmItem} from "../FilmItem/FilmItem";
import {deleteTrashFilms} from "../../_helpers/deleteTrashFilms";

interface PopularTypes {
    data: IMovies | undefined;
    title: string
}

export const Popular: React.FC<PopularTypes> = ({data, title}) => {

    return (
        <div className='container'>
            <div className={styles.top}>
                <h1>{title}</h1>
                <Button style={styles.button} text='Смотреть все'/>
            </div>

            <Slider
                itemsNumber={6}
                data={deleteTrashFilms(data?.items)?.map((item) => (
                    <FilmItem key={item.imdbId} item={item}/>
                ))}
            />
        </div>
    );
}


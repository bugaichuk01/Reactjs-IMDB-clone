import React from 'react';
import {IMovie} from "../../../../../types/IMovie";
import {Slider} from "../../../../Slider/Slider";
import {FilmItem} from "../../../../FilmItem/FilmItem";
import {deleteTrashFilms} from "../../../../../_helpers/deleteTrashFilms";
import {FilmsTitle} from "../../../../FilmsTitle/FilmsTitle";
import {Button} from "../../../../UI/Button/Button";
import styles from './Popular.module.scss';
import {FaChevronRight} from "react-icons/fa";
import {IBaseItems} from "../../../../../types/IQuery";

interface PopularTypes {
    data: IBaseItems<IMovie> | undefined;
    title: string;
    description: string;
}

export const Popular: React.FC<PopularTypes> = ({data, title, description}) => {

    return (
        <>
            <div className={styles.top}>
                <FilmsTitle title={title} description={description} />
                <Button style={styles.button}>
                    <span className={styles.title}>Смотреть все...</span>
                    <FaChevronRight />
                </Button>
            </div>

            <Slider
                itemsNumber={6}
                data={deleteTrashFilms(data?.items)?.map((item) => (
                    <FilmItem key={item.imdbId} item={item}/>
                ))}
            />
        </>
    );
}


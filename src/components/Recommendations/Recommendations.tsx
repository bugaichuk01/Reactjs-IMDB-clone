import React from 'react';
import styles from './Recommendations.module.scss';
import cn from 'classnames';
import {FilmItem} from "../FilmItem/FilmItem";
import {UiButton} from "../UI/UIButton/UIButton";
import {IMovies} from "../../types/IMovie";
//@ts-ignore
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {FaChevronRight} from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa";
import {deleteTrashFilms} from "../../_helpers/deleteTrashFilms";

interface RecommendationsTypes {
    data: IMovies | undefined;
    title: string
}

interface renderButtonTypes {
    isDisabled: boolean
}

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 6},
};

export const Recommendations: React.FC<RecommendationsTypes> = ({data, title}) => {

    const renderPrevButton = ({isDisabled}: renderButtonTypes) => {
        return <div className={isDisabled ? styles.disabled : cn(styles.thumb, styles.thumb_left)}>
            <FaChevronLeft/>
        </div>
    };

    const renderNextButton = ({isDisabled}: renderButtonTypes) => {
        return <div className={isDisabled ? styles.disabled : cn(styles.thumb, styles.thumb_right)}>
            <FaChevronRight/>
        </div>
    };

    return (
        <div className={cn('container', styles.container)}>
            <div className={styles.top}>
                <h1>{title}</h1>
                <UiButton style={styles.button} text='Смотреть все'/>
            </div>

            <AliceCarousel
                mouseTracking
                items={deleteTrashFilms(data?.items).map((item) => (
                    <FilmItem key={item.imdbId} item={item}/>
                ))}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={true}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </div>
    );
}


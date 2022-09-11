import React from 'react';
import styles from './Recommendations.module.scss';
import cn from 'classnames';
import {UiButton} from "../UI/UIButton/UIButton";
import {IMovies} from "../../types/IMovie";
import 'react-alice-carousel/lib/alice-carousel.css';
import {RecommendationsSlider} from "../RecommendationsSlider/RecommendationsSlider";
import {deleteTrashFilms} from "../../_helpers/deleteTrashFilms";

interface RecommendationsTypes {
    data: IMovies | undefined;
    title: string
}

export const Recommendations: React.FC<RecommendationsTypes> = ({data, title}) => {

    return (
        <div className={cn('container', styles.container)}>
            <div className={styles.top}>
                <h1>{title}</h1>
                <UiButton style={styles.button} text='Смотреть все'/>
            </div>

            <RecommendationsSlider data={deleteTrashFilms(data?.items)}/>
        </div>
    );
}


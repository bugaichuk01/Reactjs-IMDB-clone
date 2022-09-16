import React from "react";
import styles from './Rating.module.scss'
import {FaStar} from "react-icons/fa";

interface RatingTypes {
    ratingKinopoisk: number | undefined;
    ratingImdb: number | undefined;
    ratingGoodReview: number | undefined
}


export const Rating: React.FC<RatingTypes> = ({ratingKinopoisk, ratingImdb, ratingGoodReview}) => {

    return (
        <div className={styles.rating_container}>
            <div className={styles.rating_item}>
                <span>Кинопоиск</span>
                <div className={styles.rating}><FaStar/> <span
                    className={styles.current_rating}>{ratingKinopoisk}</span> / 10
                </div>
            </div>

            <div className={styles.rating_item}>
                <span>Imdb</span>
                <div className={styles.rating}><FaStar/> <span
                    className={styles.current_rating}>{ratingImdb}</span> / 10
                </div>
            </div>

            <div className={styles.rating_item}>
                <span>Good Review</span>
                <div className={styles.rating}><FaStar/> <span
                    className={styles.current_rating}>{ratingGoodReview}</span> / 100
                </div>
            </div>

        </div>
    )
}
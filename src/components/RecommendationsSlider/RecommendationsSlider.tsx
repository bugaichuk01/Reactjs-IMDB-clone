import React from 'react';
import styles from "../Recommendations/Recommendations.module.scss";
import cn from "classnames";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import {IMovie} from "../../types/IMovie";
import {FilmItem} from "../FilmItem/FilmItem";

interface renderButtonTypes {
    isDisabled: boolean
}

interface RecommendationsSliderTypes {
    data: IMovie[] | undefined;
}

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 6},
};

export const RecommendationsSlider: React.FC<RecommendationsSliderTypes> = ({data}) => {
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
        <AliceCarousel
            mouseTracking
            items={data?.map((item) => (
                <FilmItem key={item.imdbId} item={item}/>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls={true}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            infinite={true}
            paddingRight={10}
        />
    );
}


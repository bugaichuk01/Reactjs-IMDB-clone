import React from 'react';
import styles from "../Popular/Popular.module.scss";
import cn from "classnames";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";

interface renderButtonTypes {
    isDisabled: boolean
}

interface SliderTypes {
    data: JSX.Element[] | undefined;
}

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 6},
};

export const Slider: React.FC<SliderTypes> = ({data}) => {
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
            items={data}
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


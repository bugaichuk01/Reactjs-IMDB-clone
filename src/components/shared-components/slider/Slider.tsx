import React from 'react';
import styles from "./Slider.module.scss";
import AliceCarousel from "react-alice-carousel";
import {SliderButton} from "../slider-button/SliderButton";

interface SliderTypes {
    data?: JSX.Element[];
    isRec?: boolean;
}

export const Slider: React.FC<SliderTypes> = ({data, isRec}) => {

    const popular = {
        0: {items: 2},
        629: {items: 3},
        820: {items: 4},
        1024: {items: 5},
        1200: {items: 6},
    };

    const recommendation = {
        0: {items: 1},
        820: {items: 2},
        1024: {items: 2},
        1200: {items: 3},
    };

    const renderPrevButton = () => <SliderButton style={styles.thumb_left} dir={'left'} />
    const renderNextButton = () => <SliderButton style={styles.thumb_right} dir={'right'} />

    return (
        <div className={styles.container}>
            <AliceCarousel
                items={data}
                mouseTracking
                infinite={true}
                paddingRight={10}
                responsive={isRec ? recommendation : popular }
                disableDotsControls={true}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </div>
    );
}


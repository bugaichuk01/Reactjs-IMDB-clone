import React from 'react';
import styles from "./Slider.module.scss";
import AliceCarousel from "react-alice-carousel";
import {SliderButton} from "../slider-button/SliderButton";

interface SliderTypes {
    data: JSX.Element[] | undefined;
    itemsNumber: number;
}

export const Slider: React.FC<SliderTypes> = ({data, itemsNumber}) => {

    const responsive = {
        0: {items: 2},
        629: {items: 3},
        820: {items: 4},
        1024: {items: 5},
        1200: {items: itemsNumber},
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
                responsive={responsive}
                disableDotsControls={true}
                controlsStrategy="alternate"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </div>
    );
}


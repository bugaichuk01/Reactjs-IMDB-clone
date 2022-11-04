import React from 'react';
import styles from './Popular.module.scss';
import {FaChevronRight} from "react-icons/fa";
import {FilmItem} from "../film-item/FilmItem";
import {deleteTrashFilms} from "_/deleteTrashFilms";
import {IMovie} from "../../../../types/IMovie";
import {IBaseItems} from "../../../../types/IQuery";
import {Slider} from "@/shared-components/slider/Slider";
import {Button} from "@/shared-components/button/Button";
import {Caption} from "@/shared-components/caption/Caption";

interface PopularTypes {
    data: IBaseItems<IMovie> | undefined;
    title: string;
    description: string;
}

export const Popular: React.FC<PopularTypes> = ({data, title, description}) => {

    return (
        <>
            <div className={styles.top}>
                <Caption title={title} description={description} />
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


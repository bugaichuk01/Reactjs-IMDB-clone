import React from 'react';
import {Link} from "react-router-dom";
import styles from './Popular.module.scss';
import {FilmItem} from "../film-item/FilmItem";
import {deleteTrashFilms} from "_/deleteTrashFilms";
import {IFilm} from "../../../../types/IFilm";
import {IBaseResponse} from "../../../../types/Responses";
import {Slider} from "@/shared-components/slider/Slider";
import {Button} from "@/shared-components/button/Button";
import {Caption} from "@/shared-components/caption/Caption";
import {CardItem} from "@/layout-components/card-item/CardItem";
import {BsPlusLg} from "react-icons/bs";
import {FaPlay} from "react-icons/fa";
import {InfoButton} from "../info-button/InfoButton";

interface PopularTypes {
    data?: IBaseResponse<IFilm>;
    title: string;
    description: string;
}

export const Popular: React.FC<PopularTypes> = ({data, title, description}) => {

    return (
        <>
            <div className={styles.top}>
                <Caption title={title} description={description}/>
                <div className={styles.btn_container}>
                    <Link to={'/films'}>
                        <Button style={styles.button}>
                            <span className={styles.title}>Смотреть все</span>
                        </Button>
                    </Link>
                </div>
            </div>

            <Slider data={deleteTrashFilms(data?.items)?.map((item) =>
                <FilmItem key={item.imdbId} item={item}/>)}
            />
        </>
    );
}


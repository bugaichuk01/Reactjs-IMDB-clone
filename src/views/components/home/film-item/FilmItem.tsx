import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {BsPlusLg} from "react-icons/bs";
import {FaPlay, FaStar} from "react-icons/fa";
import styles from './FilmItem.module.scss'
import {IMovie} from "../../../../types/IMovie";
import {Prompt} from "../prompt/Prompt";
import {InfoButton} from "../info-button/InfoButton";
import {Button} from "@/shared-components/button/Button";
import {Bookmark} from "@/shared-components/bookmark/Bookmark";

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

    return (
        <div className={styles.list_item}>
            {isInfoOpen && <Prompt id={item.kinopoiskId} isOpen={isInfoOpen} onClose={setIsInfoOpen}/>}
            <Bookmark/>

            <Link to={`film/${item.kinopoiskId}`}>
                <img className={styles.image} src={item.posterUrl} alt={item.nameOriginal}/>
            </Link>
            <div className={styles.bottom}>
                <div className={styles.rating_group}>
                    <FaStar className={styles.icon}/>
                    <span className={styles.rating}>{item.ratingKinopoisk}</span>
                </div>
                <span className={styles.name}>{item.nameRu}</span>
                <Button style={styles.watchlist_btn}>
                    <BsPlusLg/>
                    Буду смотреть
                </Button>
                <div className={styles.film_info}>
                    <Button style={styles.trailer_btn}>
                        <FaPlay/>
                        Трейлер
                    </Button>
                    <InfoButton onClick={() => setIsInfoOpen(true)}/>
                </div>
            </div>
        </div>
    );
}
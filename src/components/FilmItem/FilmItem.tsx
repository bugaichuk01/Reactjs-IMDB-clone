import React, {useState} from 'react';
import styles from './FilmItem.module.scss'
import {IMovie} from "../../types/IMovie";
import {FaPlay, FaStar} from "react-icons/fa";
import {Prompt} from "../Prompt/Prompt";
import {Info} from "./components/Info/Info";
import {Bookmark} from "./components/Bookmark/Bookmark";
import {Button} from "../UI/Button/Button";
import {BsPlusLg} from "react-icons/bs";

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

    return (
        <li className={styles.list_item}>
            {isInfoOpen && <Prompt id={item.kinopoiskId.toString()} isOpen={isInfoOpen} onClose={setIsInfoOpen}/>}

            <img className={styles.image} src={item.posterUrl} alt={item.nameOriginal}/>
            <Bookmark/>
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
                    <Info onClick={() => setIsInfoOpen(true)}/>
                </div>
            </div>
        </li>
    );
}
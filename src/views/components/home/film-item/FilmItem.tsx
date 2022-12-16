import React, {useState} from 'react';
import {FaPlay} from "react-icons/fa";
import styles from './FilmItem.module.scss'
import {IFilm} from "../../../../types/IFilm";
import {Prompt} from "../prompt/Prompt";
import {InfoButton} from "../info-button/InfoButton";
import {Button} from "@/shared-components/button/Button";
import {Bookmark} from "@/shared-components/bookmark/Bookmark";
import {CardItem} from "@/layout-components/card-item/CardItem";
import {WatchlistButton} from "@/shared-components/watchlist-button/WatchlistButton";

interface FilmItemProps {
    item: IFilm
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

    return (
        <CardItem
            link={`film/${item.kinopoiskId}`}
            src={item.posterUrl}
            name={item.nameRu}
            rating={item.ratingKinopoisk}
            footerClassName={styles.footer}
        >
            <Bookmark/>

            {isInfoOpen && <Prompt id={item.kinopoiskId} isOpen={isInfoOpen} onClose={setIsInfoOpen}/>}

            <div className={styles.btn_group}>
                <WatchlistButton />

                <div className={styles.film_info}>
                    <Button style={styles.trailer_btn}>
                        <FaPlay/>
                        Трейлер
                    </Button>
                    <InfoButton onClick={() => setIsInfoOpen(true)}/>
                </div>
            </div>

        </CardItem>
    );
}
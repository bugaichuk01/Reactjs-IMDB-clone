import React, {useRef} from 'react';
import styles from './Prompt.module.scss';
import {getTimeFromMinutes} from "../../_helpers/getTimeFromMinutes";
import {convertAgeLimit} from "../../_helpers/convertAgeLimit";
import {capitalize} from "../../_helpers/capitalize";
import {FaStar, FaTimes} from "react-icons/fa";
import {createPortal} from "react-dom";
import {useGetFilmByIdQuery} from "../../_services/serviceAPI";
import {useOnClickOutside} from "usehooks-ts";
import {Button} from "../UI/Button/Button";
import {BsPlusLg} from "react-icons/bs";

interface PromptTypes {
    id: string;
    onClose: (value: boolean) => void;
    isOpen: boolean;
}

export const Prompt: React.FC<PromptTypes> = ({id, isOpen, onClose}) => {
    const {data} = useGetFilmByIdQuery(id);

    const divRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(divRef, () => onClose(false));

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.prompt}>
            <div ref={divRef} className={styles.prompt_dialog}>
                <div className={styles.close_btn} onClick={() => onClose(false)}>
                    <FaTimes/>
                </div>
                <div className={styles.prompt_panel}>
                    <div className={styles.prompt_content}>
                        <div className={styles.header}>
                            <img className={styles.poster} src={data?.posterUrl} alt={data?.nameOriginal}/>
                            <div className={styles.header_info}>
                                <div className={styles.title}>
                                    <h3>{data?.nameRu}</h3>
                                </div>
                                <ul className={styles.list}>
                                    <li>{data?.year}</li>
                                    <li className={styles.secondary_item}>{getTimeFromMinutes(data?.filmLength)}</li>
                                    <li className={styles.secondary_item}>{convertAgeLimit(data?.ratingAgeLimits)}</li>
                                </ul>
                                <ul className={styles.list}>
                                    {data?.genres.map((genre) => (
                                        <li className={styles.secondary_genre}
                                            key={genre.genre}>{capitalize(genre.genre)}</li>
                                    ))}
                                </ul>
                                <div className={styles.rating_group}>
                                    <FaStar className={styles.icon}/>
                                    <div>
                                        <span>{data?.ratingKinopoisk}</span>
                                        <span className={styles.rating_secondary}>/10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.description}>{data?.description}</div>
                        <Button style={styles.watchlist_btn}>
                            <BsPlusLg/>
                            Буду смотреть
                        </Button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}


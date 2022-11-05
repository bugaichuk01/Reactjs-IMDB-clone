import React, {useRef} from 'react';
import {createPortal} from "react-dom";
import {BsPlusLg} from "react-icons/bs";
import styles from './Prompt.module.scss';
import {useOnClickOutside} from "usehooks-ts";
import {FaStar, FaTimes} from "react-icons/fa";
import converter from '_/converters';
import {useGetFilmByIdQuery} from "_/serviceAPI";
import {getTimeFromMinutes} from "_/getTimeFromMinutes";
import {Button} from "@/shared-components/button/Button";
import {EnumInfo} from "@/shared-components/enum-info/EnumInfo";

interface PromptTypes {
    id: number;
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
                                <EnumInfo>
                                    <li>{data?.year}</li>
                                    <li>{getTimeFromMinutes(data?.filmLength)}</li>
                                    <li>{converter.convertAgeLimit(data?.ratingAgeLimits)}</li>
                                </EnumInfo>
                                <EnumInfo>
                                    {data?.genres.map((genre) => (
                                        <li key={genre.genre}>{converter.convertFirstLetter(genre.genre)}</li>
                                    ))}
                                </EnumInfo>
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


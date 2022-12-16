import React, {useRef} from 'react';
import {createPortal} from "react-dom";
import styles from './Prompt.module.scss';
import {useOnClickOutside} from "usehooks-ts";
import {FaStar, FaTimes} from "react-icons/fa";
import converter from '_/converters';
import {useGetFilmByIdQuery} from "_/serviceAPI";
import {getTimeFromMinutes} from "_/getTimeFromMinutes";
import {Loader} from "@/layout-components/content/Content";
import {EnumInfo} from "@/shared-components/enum-info/EnumInfo";
import {WatchlistButton} from "@/shared-components/watchlist-button/WatchlistButton";

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
                {data ?
                    <div className={styles.prompt_content}>
                        <img className={styles.poster} src={data?.posterUrl} alt={data?.nameOriginal}/>
                        <div className={styles.header}>
                            <div className={styles.title}>
                                <h3>{data?.nameRu}</h3>
                            </div>
                            <EnumInfo>
                                <li>{data?.year}</li>
                                <li>{getTimeFromMinutes(data?.filmLength)}</li>
                                {data.ratingAgeLimits && <li>{converter.convertAgeLimit(data.ratingAgeLimits)}</li>}
                            </EnumInfo>
                            <EnumInfo>
                                {data?.genres.map((genre) => (
                                    <li key={genre.genre}>{converter.convertFirstLetter(genre.genre)}</li>
                                ))}
                            </EnumInfo>
                            <EnumInfo>
                                {data?.countries.map((country) => (
                                    <li key={country.country}>{converter.convertFirstLetter(country.country)}</li>
                                ))}
                            </EnumInfo>
                            <div className={styles.rating_group}>
                                <FaStar className={styles.icon}/>
                                <div className={styles.rating}>
                                    <span>{data?.ratingKinopoisk}</span>
                                    <span className={styles.rating_secondary}> / 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <Loader/>
                }
                <div className={styles.description}>{data?.description}</div>
                <WatchlistButton />
            </div>
        </div>,
        document.body
    );
}


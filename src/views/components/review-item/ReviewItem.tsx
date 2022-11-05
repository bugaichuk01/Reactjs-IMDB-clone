import React, {useState} from 'react';
import {IReview} from "../../../types/IReview";
import cn from 'classnames';
import styles from './ReviewItem.module.scss'
import {Button} from "@/shared-components/button/Button";
import {EnumInfo} from "@/shared-components/enum-info/EnumInfo";
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";

interface ReviewItemProps {
    item: IReview;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({item}) => {
    const [isTrimmed, setIsTrimmed] = useState<boolean>(true);

    const data = new Date(item.date)

    return (
        <div className={styles.item}>
            <div className={styles.content}>
                {item.title && <h3 className={styles.title}>{item.title}</h3>}
                <p className={cn(styles.review, isTrimmed && styles.trimmed)}>{item.description}</p>
                <div className={styles.bottom}>
                    <Button style={styles.button} onClick={() => setIsTrimmed(!isTrimmed)}>
                        {isTrimmed ? 'Подробнее' : 'Скрыть'}
                    </Button>

                    <div className={styles.buttons}>
                        <div className={styles.likes}>
                            <Button style={styles.bi}>
                                <BiLike/>
                            </Button>
                            <span>{item.positiveRating}</span>
                        </div>

                        <div className={styles.likes}>
                            <Button style={styles.bi}>
                                <BiDislike/>
                            </Button>
                            <span>{item.negativeRating}</span>
                        </div>
                    </div>
                </div>
            </div>

            <EnumInfo>
                <li className={styles.author}>{item.author}</li>
                <li className={styles.date}>{data.toLocaleDateString()}</li>
            </EnumInfo>
        </div>
    );
};


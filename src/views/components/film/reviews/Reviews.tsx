import React from 'react';
import styles from './Reviews.module.scss';
import {useGetReviewsQuery} from '_/serviceAPI';
import {Loader} from "@/layout-components/content/Content";
import {Caption} from "@/shared-components/caption/Caption";
import {ReviewItem} from "../../review-item/ReviewItem";

interface ReviewsProps {
    id: number | undefined
}

export const Reviews: React.FC<ReviewsProps> = ({id}) => {
    const {data, isLoading} = useGetReviewsQuery({id: id});

    return (
        <>
            {
                data?.items.length && (
                    <div>
                        <Caption description={`Рецензии зрителей`}/>
                        <div className={styles.content}>
                            {
                                isLoading ? <Loader/>
                                    : (
                                        <>
                                            {data?.items.map((item) => {
                                                return <ReviewItem key={item.kinopoiskId} item={item}/>;
                                            })}
                                        </>
                                    )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};


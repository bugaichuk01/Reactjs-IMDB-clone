import React, {useEffect} from 'react';
import styles from './Reviews.module.scss';
import {useGetReviewsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {Content} from "@/layout-components/content/Content";
import {Caption} from "@/shared-components/caption/Caption";
import {ReviewItem} from "../review-item/ReviewItem";
import {Paginate} from "@/shared-components/paginate/Paginate";
import {useActions} from "_/useActions";

interface ReviewsProps {
    id?: number;
}

export const Reviews: React.FC<ReviewsProps> = ({id}) => {
    const { reviewsPage } = useTypedSelector((state) => state.paginationReducer);
    const {setReviewsPage} = useActions();

    useEffect(() => {
        setReviewsPage(1)
    }, [])

    const {data, isLoading, isFetching} = useGetReviewsQuery({id: id, page: reviewsPage});

    return (
        <>
            {
                data?.items && (
                    <Content data={data?.items} isLoading={isLoading} isFetching={isFetching}>
                        <Caption description={`Рецензии зрителей`} />

                        <div className={styles.content}>
                            {data?.items.map((item) => <ReviewItem key={item.kinopoiskId} item={item}/>)}

                        </div>
                        <Paginate page={reviewsPage} setPage={setReviewsPage} totalPages={data?.totalPages}/>
                    </Content>

                )
            }
        </>
    );
};


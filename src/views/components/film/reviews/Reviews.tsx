import React, {useEffect, useState} from 'react';
import styles from './Reviews.module.scss';
import {useGetReviewsQuery} from '_/serviceAPI';
import {Loader} from "@/layout-components/content/Content";
import {Caption} from "@/shared-components/caption/Caption";
import {ReviewItem} from "../../review-item/ReviewItem";
import ReactPaginate from "react-paginate";

interface ReviewsProps {
    id: number | undefined
}

export const Reviews: React.FC<ReviewsProps> = ({id}) => {
    const [pageCount, setPageCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const {data, isLoading, refetch} = useGetReviewsQuery({id: id, page: page});

    useEffect(() => {
        data && setPageCount(Math.ceil(data?.total / data?.items.length));
    }, [data]);

    const handleClick = (value: {selected: number}) => {
        setPage(value.selected + 1);
        refetch();
        window.scrollTo(0, 1250)
    }
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
                            <ReactPaginate
                                breakLabel="..."
                                onPageChange={handleClick}
                                pageRangeDisplayed={5}
                                containerClassName={styles.pagination_container}
                                pageCount={pageCount}
                                previousLinkClassName={styles.pagination_text}
                                nextLinkClassName={styles.pagination_text}
                                pageClassName={styles.page}
                                activeClassName={styles.active}
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
};


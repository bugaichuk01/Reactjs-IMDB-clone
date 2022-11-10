import React, {useEffect, useState} from 'react';
import styles from './Reviews.module.scss';
import ReactPaginate from "react-paginate";
import {useGetReviewsQuery} from '_/serviceAPI';
import {Content} from "@/layout-components/content/Content";
import {Caption} from "@/shared-components/caption/Caption";
import {ReviewItem} from "../review-item/ReviewItem";

interface ReviewsProps {
    id: number | undefined
}

export const Reviews: React.FC<ReviewsProps> = ({id}) => {
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(0);
    const {data, isLoading, isFetching, refetch} = useGetReviewsQuery({id: id, page: page});

    useEffect(() => {
        data?.items && setPageCount(Math.ceil(data.total / data.items.length));
    }, [data]);

    const handleClick = (value: { selected: number }) => {
        setPage(value.selected + 1);
        refetch();
        window.scrollTo(0, 1250)
    }
    return (
        <>
            {
                data?.items?.length && (
                    <Content data={data} isLoading={isLoading} isFetching={isFetching}>
                        <Caption description={`Рецензии зрителей`}/>
                        <div className={styles.content}>
                            {data?.items.map((item) => <ReviewItem key={item.kinopoiskId} item={item}/>)}

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
                    </Content>
                )
            }
        </>
    );
};


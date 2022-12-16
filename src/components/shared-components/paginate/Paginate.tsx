import React from 'react';
import Pagination from 'react-responsive-pagination';
import styles from "./Paginate.module.scss";

interface IPagination {
    totalPages?: number;
    page: number;
    setPage: (page: number) => void;
}

export const Paginate: React.FC<IPagination> = ({totalPages = 0, page, setPage}) => {
    const change = (pageTo: number) => {
        setPage(pageTo);
        window.scrollTo(0, 0)
    }

    return (
        <Pagination
            current={page}
            total={totalPages}
            onPageChange={change}
            className={styles.pagination_container}
            pageItemClassName={styles.page}
            activeItemClassName={styles.active}
            srOnlyClassName={styles.sr}
        />
    );
};


export interface ISearchQuery {
    type: string;
    keyword: string;
}

export interface IQueryParams {
    id?: number;
    text?: string;
    page?: number;
    order?: string;
    type?: string;
    keyword?: string;
    genre?: string;
}

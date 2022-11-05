export interface ISearchQuery {
    type: string;
    keyword: string;
}

export interface IParams {
    id: number | undefined;
    text?: string;
    page?: number;
}

export interface IBaseItems<T> {
    items: T[];
    films?: T[];
    total: number;
    totalPage?: number;
}

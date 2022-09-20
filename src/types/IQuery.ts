export interface ISearchQuery {
    type: string;
    keyword: string;
}

export interface IBaseItems<T> {
    items: T[];
    films?: T[];
    total: number;
    totalPage?: number;
}

export interface IReview {
    kinopoiskId: number;
    example: 2;
    type: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'UNKNOWN';
    date: string
    positiveRating: number;
    negativeRating: number;
    author: string;
    title?: string;
    description: string;
}
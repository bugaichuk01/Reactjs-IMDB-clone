export interface IActor {
    personId: number;
    webUrl: string;
    nameRu?: string;
    nameEn?: string;
    sex: string;
    posterUrl: string;
    growth?: number;
    birthday?: string;
    death?: string;
    age?: number;
    birthplace?: string;
    deathplace?: string;
    profession?: string;
    facts?: string[];
    films?: Film[];
    hasAwards?: boolean;
    spouses?: Spouses[];
}

type Film = {
    description: string
    filmId: number
    general: boolean
    nameEn: string
    nameRu: string
    professionKey: string
    rating: string
}

type Spouses = {
    children: number
    divorced: boolean
    divorcedReason: string
    name: string
    personId: number
    relation: string
    sex: string
    webUrl: string
}
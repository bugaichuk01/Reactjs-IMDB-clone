export const convertMovieType = (type: string | undefined) => {
    switch(type) {
        case 'FILM':
            return 'фильм'
        case 'TV_SERIES':
        case 'MINI_SERIES':
        case 'TV_SHOW':
            return 'сериал'
        default:
            return 'фильм'
    }
}
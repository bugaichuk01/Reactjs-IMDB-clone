export const convertBoxOffice = (type: string | undefined) => {
    switch(type) {
        case 'USA':
            return 'Сборы в США'
        case 'WORLD':
            return 'Сборы в мире'
        case 'RUS':
            return 'Сборы в России'
        case 'BUDGET':
            return 'Бюджет'
    }
}
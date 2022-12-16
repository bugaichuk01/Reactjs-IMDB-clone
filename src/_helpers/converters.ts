class Converter {

    /**
     * Get two last characters of an age limit string
     * @param {string | undefined} age
     * @return {string} 3 characters string
     */
    static convertAgeLimit = (age?: string) => {
        return age?.slice(3) + '+';
    }

    /**
     * Convert price value to dollars
     * @param {number | undefined} price
     * @return {string} dollars price
     */
    static convertPrice = (price?: number) => {
        return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    /**
     * Convert first letter toUpperCase()
     * @param {string} text
     * @return {string} string with converted first letter
     */
    static convertFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    /**
     * Convert English word to Russian
     * @param {string | undefined} type
     * @return {string} converted string
     */
    static convertBoxOffice = (type?: string) => {
        switch (type) {
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

    /**
     * Convert English word to Russian
     * @param {string | undefined} type
     * @return {string} converted string
     */
    static convertMovieType = (type?: string) => {
        switch (type) {
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
}

export default Converter;
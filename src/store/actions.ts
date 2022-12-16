import {changeCurrentOption, toggleMenu} from "./reducers/dropDown.slice";
import {setSearch, toggleSearch} from "./reducers/search.slice";
import {setPage, setReviewsPage} from "./reducers/pagination.slice";
import {setOrder, setType, setKeyword, setGenre} from "./reducers/filters.slice";

export {
    setPage,
    setType,
    setGenre,
    setOrder,
    setSearch,
    setKeyword,
    toggleMenu,
    toggleSearch,
    setReviewsPage,
    changeCurrentOption
}
import { SET_FILTER } from '../constants/contants'

const initState = {
    filter: {
        _page: 1,
        _limit: 16,
        _sort: '',
        _order: '',
        name_like: '',
        categories_like: '',
        price_range_like: '',
        rating_like: '',
        brand_like: '',
        type_like: '',
    }
}

const filterReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        default:
            return state
    }
}

export default filterReducer
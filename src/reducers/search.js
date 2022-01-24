import { SET_SEARCH_ITEM } from '../constants/contants'

const initState = {
    searchTerm: '',
}

const searchReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_SEARCH_ITEM:
            return {
                ...state,
                searchTerm: action.payload,
            }
        default:
            return state
    }
}

export default searchReducer
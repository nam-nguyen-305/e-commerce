import { SET_PAGINATIONS } from '../constants/contants'

const initState = {
    pagination: {
        _page: 1,
        _limit: 16,
        _totalRows: 116,
    },
}

const paginationReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_PAGINATIONS:
            return {
                ...state,
                pagination: action.payload,
            }
        default:
            return state
    }
}

export default paginationReducer
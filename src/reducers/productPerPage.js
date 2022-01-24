import { SET_PRODUCTS_PERPAGE } from '../constants/contants'

const initState = {
    productPerPage: [],
}

const productPerPageReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_PERPAGE:
            return {
                ...state,
                productPerPage: action.payload,
            }
        default:
            return state
    }
}

export default productPerPageReducer
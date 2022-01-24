import { SET_PRODUCT_LIST } from '../constants/contants'

const initState = {
    productList: [],
}

const productListReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload,
            }
        default:
            return state
    }
}

export default productListReducer
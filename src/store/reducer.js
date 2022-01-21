import {SET_PRODUCTS_PERPAGE,SET_PAGINATIONS,SET_FILTER,SET_SEARCH_ITEM,SET_PRODUCT_LIST,SET_SELECTED} from './contants'

const initState = {
    searchTerm: '',
    productPerPage: [],
    productList: [],
    selected: '',
    pagination: {
        _page: 1,
        _limit: 16,
        _totalRows: 116,
    },
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

function reducer(state, action) {
    switch (action.type) {
        case SET_PRODUCTS_PERPAGE :
            return {
                ...state,
                productPerPage: action.payload
            }
        case SET_PAGINATIONS :
            return {
                ...state,
                pagination: action.payload
            }
        case SET_FILTER :
            return {
                ...state,
                filter: action.payload
            }
        case SET_SEARCH_ITEM :
            return {
                ...state,
                searchTerm: action.payload
            }
        case SET_PRODUCT_LIST :
            return {
                ...state,
                productList: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                
                selected: action.payload
            }
        default:
            throw new Error("invalid action")
    }
}
export {initState}
export default reducer
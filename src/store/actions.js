import {SET_PRODUCTS_PERPAGE,SET_PAGINATIONS,SET_FILTER,SET_SEARCH_ITEM,SET_PRODUCT_LIST,SET_SELECTED} from './contants'


export const setProductsPerPage = payload => ({
    type: SET_PRODUCTS_PERPAGE,
    payload
})

export const setPaginations = payload => ({
    type: SET_PAGINATIONS,
    payload
})

export const setFilter = payload => ({
    type: SET_FILTER,
    payload
})

export const setSearchItem = payload => ({
    type: SET_SEARCH_ITEM,
    payload
})

export const setProductList = payload => ({
    type: SET_PRODUCT_LIST,
    payload
})
export const setSelected = payload => ({
    type: SET_SELECTED,
    payload
})

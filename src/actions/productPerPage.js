import { SET_PRODUCTS_PERPAGE } from '../constants/contants'

export const setProductsPerPage = payload => ({
    type: SET_PRODUCTS_PERPAGE,
    payload
})
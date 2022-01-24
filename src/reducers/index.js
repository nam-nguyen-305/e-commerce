
import filterReducer from "./filter";
import productListReducer from "./productList"
import productPerPageReducer from "./productPerPage"
import paginationReducer from "./pagination"
import searchReducer from "./search"
import selectedReducer from "./selected";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    filter: filterReducer,
    productPerPage: productPerPageReducer,
    pagination: paginationReducer,
    productList: productListReducer,
    types: productPerPageReducer,
    search: searchReducer,
    selected: selectedReducer
})

export default rootReducer
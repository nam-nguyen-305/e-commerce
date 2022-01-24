import { SET_SELECTED } from '../constants/contants'

const initState = {
    selected: '',

}

const selectedReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload,
            }
        default:
            return state
    }
}

export default selectedReducer
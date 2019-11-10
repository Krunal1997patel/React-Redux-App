
import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
} from '../action'



const initialState = {
    data: [],
    gettiingData: false,
    error: ''
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case FETCHING_DATA:
            return { ...state, gettiingData: true }

        case FETCHING_DATA_SUCCESS:
            return { ...state, data: action.playload, gettiingData: false }

        case FETCHING_DATA_FAILURE: 
        return { ...state, error: action.playload, gettiingData: true }

        default:
            return state
    }
}

export default reducer
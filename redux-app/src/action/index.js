
import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';



export const overwatchData = () => dispatch => {
    dispatch( { type: FETCHING_DATA } )
    
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://best-overwatch-api.herokuapp.com/heroes`)
    .then(response => dispatch( { type: FETCHING_DATA_SUCCESS, playload: response.data } ))
    .catch(err => dispatch({ type: FETCHING_DATA_FAILURE, playload: err.response} ))
}
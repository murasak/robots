import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

/**
 *  Redux with NO redux-thunk: Sync funciton
 * */  
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

/**
 * With redux-thunk: To deal with Async function
 */
// export const requestRobots = (dispatch) => {
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {return res.json();})
            .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data }))
            .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
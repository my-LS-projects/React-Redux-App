import axios from 'axios'

// action types
export const START_FETCHING = 'START_FETCHING' 
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const corsBypass = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://www.breakingbadapi.com/api/'
const charactersUrl = `${corsBypass}${baseUrl}characters`
console.log(charactersUrl)


// export const fetchCharacters = dispatch => {
//     // action creators by default are synchronous
//     // if we want them to do async actions, they need to do that action first before dispatching action
//     // we allow this to do asynchronous actions through 'thunk' from redux-thunk
//     // is a middleware function that will intercept anything returned out of this return
//     // by dispatching this first, we get to transition to our loading state
//     // do some async action and dispatch error or success action. when call gets back we transition from loading to success
//     dispatch({ type: START_FETCHING }) 
//     axios.get(baseUrl)
//     .then(response => {
//         console.log('RESPONSE: ', response)
//     })
//     .catch(error => {
//         console.log('ERROR: ', error)
//         dispatch({ type: FETCH_FAILURE, payload: error})
//     })
// }
// }
// dispatch({ type: FETCH_SUCCESS, payload: response.data})

// same as

export const fetchCharacters = () => {
    // action creators by default are synchronous
    // if we want them to do async actions, they need to do that action first before dispatching action
    // we allow this to do asynchronous actions through 'thunk' from redux-thunk
    // is a middleware function that will intercept anything returned out of this return
    return (dispatch) => {
        dispatch({ type: START_FETCHING}) // by dispatching this first, we get to transition to our loading state
        // do some async action and dispatch error or success action. when call gets back we transition from loading to success
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(response => {
            console.log('RESPONSE: ', response)
            dispatch({ type: FETCH_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log('ERROR: ', error)
            dispatch({ type: FETCH_FAILURE, payload: error})
        })
    }
}

// redux thunk
const thunk = next => action => store => {
    // any middleware is going to have access to the action dispatched, the next function = continue process, and to the entire store
    if (typeof action === 'object') {
        next(action) // forward action untouched
    } else if (typeof action === 'function') {
        action(store.dispatch) // stop action and call function
    }
}
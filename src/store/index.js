import { createStore } from 'redux'

const reducer = (state = { title: '' }, action) => {
    
    if (action.type === 'setTitle') {
     return {title: action.payload}
 }
    return state;
}

const store = createStore(reducer)

export default store
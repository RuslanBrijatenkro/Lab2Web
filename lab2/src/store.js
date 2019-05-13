import {createStore,combineReducers} from 'redux';
import galleryReducer from './galleryReducer'

const reducer = combineReducers({
    ui:galleryReducer
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
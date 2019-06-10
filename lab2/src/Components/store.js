import {createStore,combineReducers} from 'redux';
import galleryReducer from './galleryReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
    form: reduxFormReducer,
    ui:galleryReducer
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
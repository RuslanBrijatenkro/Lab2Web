import actionTypes from './galleryActionType';

const initialState={
    searchValue:'',
    filteredGallery:[]
}

export default function galleryReducer (state=initialState,action){
    switch(action.type){
        case actionTypes.GET_SEARCH_FIELD_VALUE:
         return{
            ...state,
            searchValue:action.searchValue
        }
        default: 
            return state;
    }
}
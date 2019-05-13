import actionTypes from './galleryActionType';

export function fetchUniqueCategory(category)
{
    return{
        type: actionTypes.GET_SEARCH_FIELD_VALUE,
        category
    }
}
export function getSearchFieldValue(searchValue){
    return{
        type:actionTypes.GET_SEARCH_FIELD_VALUE,
        searchValue
    }
}
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
export const logIn = () => ({
    type: actionTypes.IS_LOGIN
})
export const logOut = () => ({
    type: actionTypes.LOGOUT
})
export const getUser = userData  => ({
    type: actionTypes.GET_USER_DATA,
    userData,
})
export const setAsAdmin = () => ({
    type: actionTypes.IS_ADMIN
})
export const getConcerts = concerts => ({
    type: actionTypes.GET_CONCERTS,
    concerts
})
export const getBooking = bookings => ({
    type: actionTypes.GET_BOOKINGS,
    bookings
})
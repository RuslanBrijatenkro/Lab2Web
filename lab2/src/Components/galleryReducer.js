import actionTypes from './galleryActionType';

const initialState={
    searchValue:'',
    filteredGallery:[],
    userData:[],
    isLogin:false,
    isAdmin:false,
    concerts:[],
    bookings:[]
}

export default function galleryReducer (state=initialState,action){
    switch(action.type){
        case actionTypes.GET_SEARCH_FIELD_VALUE:
         return{
            ...state,
            searchValue:action.searchValue
        }
        case actionTypes.GET_USER_DATA: 
            return{
                ...state, 
                userData: action.userData
            }
        case actionTypes.IS_LOGIN: 
            return{
                ...state, 
                isLogin:true
            }
        case actionTypes.LOGOUT: 
            return{
                ...state, 
                isLogin:false,
                isAdmin:false
            }
        case actionTypes.IS_ADMIN:
            return{
                ...state,
                isAdmin:true
            }
        case actionTypes.GET_CONCERTS: 
            return{
                ...state, 
                concerts: action.concerts
            }
        case actionTypes.GET_BOOKINGS: 
            return{
                ...state, 
                bookings: action.bookings
            }
        default: 
            return state;
    }
}
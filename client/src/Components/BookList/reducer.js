import {fetchBooks} from 'Api';
const ACTIONS = {
    START_LOADING:'Book_List_START_LOADING',
    ERROR_LOADING:'Book_List_ERROR_LOADING',
    DATA_LOADED:'Book_List_DATA_LOADED',
};

const initialState = {
    books:[],
    isLoading:false
};

const BookListReducer = (state=initialState,action) => {
    switch(action.type) {
        case ACTIONS.START_LOADING:
        return {...state,isLoading:true}
        case ACTIONS.DATA_LOADED:
        return {...state,isLoading:false,books:action.payload}
        default:return state;
    }
}

export const loadBooks = () => async (dispatch) =>{
    dispatch({
        type: ACTIONS.START_LOADING
    })
    const res = await fetchBooks();
    const books = res.data;
    dispatch({
        type:ACTIONS.DATA_LOADED,
        payload:books
    })
    
}

export default BookListReducer;

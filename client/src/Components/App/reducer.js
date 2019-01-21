import {fetchBooks,postBook,delBook} from 'Api';
import {store} from 'index.js';
import produce from 'immer';
import _ from 'lodash';
const ACTIONS = {
    START_LOADING:'Book_List_START_LOADING',
    ERROR_LOADING:'Book_List_ERROR_LOADING',
    DATA_LOADED:'Book_List_DATA_LOADED',
    BOOK_ADD:'Book_List_BOOK_ADD',
    BOOK_DELETE: 'Book_List_BOOK_DELETE',
    UPDATE_LIST: 'Book_list_UPDATE_LIST',
    DELETE_BOOK: 'Book_List_DELETE_BOOK'
};

const initialState = {
    books:[],
    isLoading:false,
};
const BookListReducer = (state=initialState,action) => {
    switch(action.type) {
        case ACTIONS.START_LOADING:
        return {...state,isLoading:true}
        case ACTIONS.DATA_LOADED:
        return {...state,isLoading:false,books:action.payload}
        case ACTIONS.UPDATE_LIST:
        return produce(state,newState => {
            newState.books.push(action.payload)
        });
        case ACTIONS.DELETE_BOOK:
        // return produce(state,newState => {
        //     newState.books.filter(_id => _id!== action.payload)
        // })
        return {...state,books:_.filter(state.books,(x)=>(x._id!==action.payload))}
        default:return state;
    }
}
export const updateBooks = (book) =>async (dispatch) =>{
    const res = await postBook(book);
    const test = store.getState()
    console.log(test);
    dispatch(
        {type:ACTIONS.UPDATE_LIST,
        payload:res.data}
    )
    
};
export const deleteBook = (id) => async (dispatch) => {
    await delBook(id);
    const test = store.getState();
    console.log(test);
    dispatch(
        {
            type:ACTIONS.DELETE_BOOK,
            payload:id
        }
    )
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

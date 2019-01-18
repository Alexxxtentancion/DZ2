import postBook from 'Api';

const ACTIONS = {
    ADD_BOOK:'Book_input_ADD_BOOK'
};

const initialState = {
    titile: '',
    author: '',
    desc: ''
}

const BookAddReducer = (state=initialState,action) => {
    switch(action.type){
        case ACTIONS.ADD_BOOK:
        return {...state}
        default:return state;

    }
}

export const addBooks = () => async(dispatch) =>{
    const book = {
        title: this.state.title,
        author:this.state.author,
        desc:this.state.desc
    }
    const res = postBook(book);
    console.log(res)
}
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadBooks,updateBooks} from 'Components/App/reducer';
import BookItem  from 'Components/BookItem/BookItem';
class BookList extends Component {
    
    componentDidMount() {
        const {loadBooks,isLoading,books} = this.props
        if(!isLoading && books.length===0){
            loadBooks();
        }
        
    }
  render() {
      const {isLoading,books} = this.props;
    return (
        isLoading ?
        <div>Загрузка...</div>:
        books.map(book => {
            return(
                  <BookItem key={book._id} book={book}/>                
            )
        })
    )
  }
}

const mapDispatchToProps = {
    loadBooks,
    updateBooks
}

const mapStateToProps = (state => {
    return state.books;
  });
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookList))
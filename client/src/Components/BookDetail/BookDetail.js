import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadBooks} from 'Components/BookList/reducer';
class BookDetail extends Component {
    componentDidMount() {
        const {loadBooks,isLoading,books} = this.props
        if(!isLoading && books.length===0){
            loadBooks();
        }
        
    }

  render() {
      const {books,match} = this.props
      console.log(match.params.id)
      const book = books.find((book) => {
          return match.params.id === book._id
      });
      console.log(book); 
    
      if(books.length>0){
        return ( 

            <div>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.desc}</div>                          
            </div>
          )

    }
    else{
        return(
            null
        )
    
    }         
  }
}

const mapStateToProps = (state => {
    return state.books;
  });
const mapDispatchToProps = {
    loadBooks
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookDetail));
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadBooks,deleteBook} from 'Components/App/reducer';
import logo from './rubbish-bin.svg';
class BookDetail extends Component {
    componentDidMount() {
        const {loadBooks,isLoading,books} = this.props
        if(!isLoading && books.length===0){
            loadBooks();
        }
        
    }
    onDelClick = (event,id) => {
        const {match,deleteBook,history} = this.props;
        event.preventDefault();
        id = match.params.id
        console.log(id);
        deleteBook(id);
        history.push('/books');
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
          <div className="card text-center" style={{width: '500px',display: 'flex',marginBottom: '500px!important',marginTop:'30px',marginLeft:'500px'}}>
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"   className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">
          {book.title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
          <p className="card-text">{book.desc}</p>
          <p>
              <button onClick={this.onDelClick}><img src={logo} alt=".." style={{height:"50px"}}  /></button>
          </p>
          </div>
          </div>
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
    loadBooks,
    deleteBook
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookDetail));
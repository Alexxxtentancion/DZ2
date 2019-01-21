import React, { Component} from 'react';
// import BookList from 'Components/BookList/BookList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import BookDetail from '../BookDetail/BookDetail';
import BookInput from 'Components/BookInput/BookInput'
import NavBar from '../NavBar/NavBar';
import BookList from 'Components/BookList/BookList'
import {loadBooks,updateBooks} from 'Components/App/reducer';
class App extends Component {
  // constructor(props){
  //   super(props);
  //   props.loadBooks();
  // }
  componentDidMount() {
    const {loadBooks,isLoading,books} = this.props
    if(!isLoading && books.length===0){
        loadBooks();
    }
    
}

renderRouter=()=>{
  return(
    this.props.books.isLoading?
      <div>Загрузка</div>:
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/input" component={BookInput} />
      </Switch>
  )
}
  render() { 
    return (
      <div>
        <NavBar/>
      {this.renderRouter()}      
      </div>       
    )
  }
}


const mapStateToProps = (state => {
  return state.books;
});
const mapDispatchToProps = {
  loadBooks,
  updateBooks
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))


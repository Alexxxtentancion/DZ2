import React, { Component } from 'react';
import BookList from 'Components/BookList/BookList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import BookDetail from '../BookDetail/BookDetail';
import BookInput from 'Components/BookInput/BookInput'
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/input" component={BookInput} />
      </Switch>
        
    );
  }
}
const mapStateToProps = (state => {
  return state;
});
export default withRouter(connect(mapStateToProps)(App))


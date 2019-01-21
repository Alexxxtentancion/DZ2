import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addBook} from 'Components/BookInput/reducer';
import {updateBooks} from 'Components/App/reducer';
class BookInput extends Component {
    state ={
        title: '',
        author: '',
        desc: ''
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = event => {
        const {updateBooks,history} = this.props;
        event.preventDefault();
        const book = {
            title: this.state.title,
            author:this.state.author,
            desc:this.state.desc
        };
        updateBooks(book);
        history.push('/books');
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {/* <div className="form-group">
            <p>
            <label>
                <input type="text" name="title" onChange={this.handleChange} placeholder="Название"/>
            </label>
            </p>            
            <p>
            <label>
                <input type="text" name="author" onChange={this.handleChange} placeholder="Автор"/>
            </label>
            </p>           
            <p>
            <label>
                <textarea type="text" name="desc" onChange={this.handleChange} placeholder="Описание"/>
            </label>
            </p>
            <button type="submit">Add</button>

        </div> */}
        <div className="input-group mb-3">
        <div className ="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Название</span>
        </div>
        <input type="text" className="form-control" name="title" onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style={{marginRight:'1000px'}}></input>
        </div>
        <div className="input-group mb-3">
        <div className ="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Автор</span>
        </div>
        <input type="text" className="form-control" name="author" onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style={{marginRight:'1000px'}}></input>
        </div>
        <div className="input-group mb-3">
        <div className ="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Описание</span>
        </div>
        <textarea type="text" className="form-control" name="desc" onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style={{marginRight:'1000px'}}></textarea>
        </div>
        <button type="submit">Add</button>                      
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state => {
    return state.books;
  });
const mapDispatchToProps = {
    addBook,
    updateBooks
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookInput))
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class BookItem extends Component {
  render() {
    const {book} = this.props;
    return (
        <div>
          <div className="card text-center" style={{width: '500px',display: 'flex',marginBottom: '500px!important',marginTop:'30px',marginLeft:'500px'}}>
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"   className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">
          <Link
          to={ `/books/${ book._id }` }
          className="list-item">{book.title}</Link>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
          </div>
          </div>
        </div>
    );
  }
}

import React, { Component } from 'react'
import axios from 'axios'
export default class BookInput extends Component {
    state ={
        title: '',
        author: '',
        desc: ''
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        const book = {
            title: this.state.title,
            author:this.state.author,
            desc:this.state.desc
        };
        // console.log(book);
        axios.post('http://localhost:3012/books',book)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Имя:
                <input type="text" name="title" onChange={this.handleChange}/>
            </label>
            <p>
            <label>Автор:
                <input type="text" name="author" onChange={this.handleChange}/>
            </label>
            </p>           
            <p>
            <label>Описание:
                <input type="text" name="desc" onChange={this.handleChange}/>
            </label>
            </p>
            <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

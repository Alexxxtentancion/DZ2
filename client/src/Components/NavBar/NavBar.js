import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >Домашняя работа №2</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-item nav-link" to='/books'>Все книги</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-item nav-link" to='/input'>Добавить</Link>
      </li>
    </ul>
  </div>
</nav>
        
      </div>
    )
  }
}

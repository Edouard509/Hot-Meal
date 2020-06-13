import React from 'react'
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo"><h1>Hot Meal</h1></div>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <div className="link-header"><Link to='/user/login'>Login/Register</Link></div>
      }
      <hr />
      {
        props.currentUser && (
          <nav>
            <NavLink to="/dishes">Dishes</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
          </nav>
        )
      }
    </div>
  )
}
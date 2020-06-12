import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <h1>Hot Meal</h1>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/user/login'>Login/Register</Link>
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
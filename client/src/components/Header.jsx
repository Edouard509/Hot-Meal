import React from 'react'
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <body>
      <header>
        <div className='header-bar'>
          <Link className="text-deco" to="/">
            <h1 className="logo-text">Hot Meal</h1>
          </Link>
        </div>
        {
          props.currentUser
            ?
            <>
              {/* // <div className="signin"> */}
              <h6 className="username">{props.currentUser.username}</h6>
              <button className='logout' onClick={props.handleLogout}>
                Logout
            </button>
              {/* // </div> */}
            </>
            :
            <ul>
              <li>
                <Link to='/user/login'>
                  Login/Register
                </Link>
              </li>
            </ul>
        }
        {/* <hr /> */}
        {
          props.currentUser && (
            <div className="items">
              <NavLink className='link' to="/dishes">Edit Dishes</NavLink>
              <NavLink className='link' to="/recipes">Add Recipes</NavLink>
            </div>
          )
        }
      </header >
    </body>
  )
}
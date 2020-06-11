import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>Hot Meal</h1>
      <Link to='/user/login'>LogIn/Register</Link>
    </div>
  )
}

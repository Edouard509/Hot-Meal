import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLoginSubmit(this.state);
          history.push('/');
          this.setState({
            username: "",
            password: ""
          })
        }}>

          <h3>Login</h3>
          <label htmlFor="username">username:
          <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">password:
          <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <Link className="link" to='/user/register'><button>Register</button></Link>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


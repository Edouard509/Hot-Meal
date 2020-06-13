import React, { Component } from 'react'
import './CreateDish.css'

export default class CreateDish extends Component {
  state = {
    name: "",
    image: ""
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value

    })
  }


  render() {
    const { name, image } = this.state;
    const { postDish, history } = this.props;
    return (
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        postDish(this.state);
        history.push('/dishes');
        this.setState({
          name: "",
          image: ""
        })
      }}>
        <hr />
        <h3>Create Dish</h3>
        <label htmlFor="name">Name:</label>
        <input
          className="input-title"
          id="id"
          name="name"
          type="text"
          value1={name}
          onChange={this.handleChange}
        />

        <label htmlFor="image">image:</label>
        <input
          className="input-image-link"
          id="id"
          name="image"
          type="text"
          value={image}
          onChange={this.handleChange}
        />
        <button className="submit-button">Submit </button>
      </form>
    )
  }
}
import React, { Component } from 'react'
import './CreateRecipe.css'

export default class CreateRecipe extends Component {
  state = {
    name: "",
    dish: ""
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value

    })
  }

  componentDidUpdate() {
    if (!this.state.dish && this.props.dishes.length) {
      this.setState({
        dish: this.props.dishes[0].id
      })
    }
  }


  render() {
    const { name } = this.state;
    const { postRecipe, history } = this.props;
    return (
      <div className="form-container">
        <form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          postRecipe(this.state);
          history.push('/recipes');
          this.setState({
            name: "",
          })
        }}>
          <hr />
          <h3>Create recipe</h3>
          <label htmlFor="name">Name:</label>
          <input
            className="input-title"
            id="id"
            name="name"
            type="text"
            value1={name}
            onChange={this.handleChange}
          />


          <label htmlFor="dish">dish:</label>
          <select onChange={this.handleChange}>
            {this.props.dishes.map(dish => (
              <option value={dish.id}> {dish.name} </option>
            ))}
          </select>
          <button>Submit </button>
        </form>
      </div>
    )
  }
}
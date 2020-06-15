import React, { Component } from 'react'
// import './EditRecipe.css'
import { getOneRecipe } from '../services/recipe'

export default class EditRecipe extends Component {
  state = {
    name: ""
  }
  async componentDidMount() {
    let id = this.props.match.params.id
    let recipe = await getOneRecipe(id)
    let { name } = recipe
    this.setState({ name })
    console.log(this.props)
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value

    })
  }


  render() {
    const { name } = this.state;
    const { editRecipe, history } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          editRecipe(this.props.match.params.id, this.state);
          history.push('/recipes');
          this.setState({
            name: ""
          })
        }}>
          <hr />
          <h3>Edit Recipe</h3>
          <label htmlFor="name">Ingrediants:</label>
          <input
            className="edit-name"
            id="id"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div >
    )
  }
}

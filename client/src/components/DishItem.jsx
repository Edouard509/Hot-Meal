import React, { Component } from 'react'
import { getOneDish, dishToRecipe } from '../services/dish';

export default class dishItem extends Component {

  state = {
    dish: null,
    recipeId: ''
  }
  componentDidMount() {
    this.setDish()
  }

  setDish = async () => {
    const dish = await getOneDish(this.props.dishId);
    this.setState({ dish })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      recipeId: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const dish = await dishToRecipe(this.state.recipeId, this.state.dish.id);
    this.setState({ dish });
  }


  render() {
    const { dish } = this.state;
    const { recipes, currentUser } = this.props;
    return (
      <div>
        {
          dish && (
            <>
              <h3>{dish.name}</h3>
              {dish.recipes.map(recipe => (
                <p key={recipe.id}>{recipe.name}</p>
              ))}
              {
                currentUser && currentUser.id === dish.user_id && (
                  <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                      <option>--Select a recipe--</option>
                      {recipes.map(recipe => (
                        <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                      ))}
                    </select>
                    <button>Add a Recipe</button>
                  </form>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}
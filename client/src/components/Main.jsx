import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllRecipes, createRecipe } from '../services/recipe';
import { getAllDishes, createDish, deleteDish, updateDish } from '../services/dish';
import ShowRecipes from './ShowRecipes';
import ShowDishes from './ShowDishes';
import CreateDish from './CreateDish';
import EditDish from './EditDish'
import DishItem from './DishItem'
import CreateRecipe from './CreateRecipe'

export default class Main extends Component {
  state = {
    recipes: [],
    dishes: []
  }

  componentDidMount() {
    this.getRecipes();
    this.getDishes();
  }



  // ========== Recipes =========

  getRecipes = async () => {
    const recipes = await getAllRecipes();
    this.setState({ recipes });
  }

  postRecipe = async (recipeData) => {
    const { dish, ...recipe } = recipeData
    const newRecipe = await createRecipe(recipe, dish);
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe]
    }))
  }


  // ========== Dishes ===========

  getDishes = async () => {
    const dishes = await getAllDishes();
    this.setState({ dishes });
  }

  postDish = async (dishData) => {
    const newDish = await createDish(dishData);
    this.setState(prevState => ({
      dishes: [...prevState.dishes, newDish]
    }))
  }

  editDish = async (id, dishData) => {
    const newDish = await updateDish(id, dishData);
    this.setState(prevState => ({
      dishes: prevState.dishes.map(dish => {
        console.log(dish.id, id)
        return dish.id == id ? newDish : dish
      })
    }))
    console.log(newDish)
  }

  destroyDish = async (id) => {
    await deleteDish(id);
    this.setState(prevState => ({
      dishes: prevState.dishes.filter(dish => dish.id !== id)
    }))
  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => (
          <ShowDishes
            dishes={!this.props.currentUser ? this.state.dishes :
              this.state.dishes.filter(dish => {
                return this.props.currentUser.id === dish.user_id
              })}
          />
        )} />
        <Route path='/user/login' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path='/user/register' render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />

        <Route exact path='/recipes' render={() => (
          <ShowRecipes
            recipes={this.state.recipes}
          />
        )} />

        <Route path='/dish/:dish_id/recipes' render={(props) => (
          <ShowRecipes
            recipes={this.state.recipes.filter(recipe => {
              console.log(props.match.params.dish_id)
              return parseInt(props.match.params.dish_id) === recipe.dish_id
            })}
          />
        )} />
        <Route path='/dishes' render={() => (
          <ShowDishes
            dishes={this.state.dishes}
            currentUser={this.props.currentUser}
            destroyDish={this.destroyDish}
          />
        )} />
        <Route path='/new/dish' render={(props) => (
          <CreateDish
            {...props}
            postDish={this.postDish}
          />
        )} />

        <Route path='/new/recipe' render={(props) => (
          <CreateRecipe
            {...props}
            postRecipe={this.postRecipe}
            dishes={this.state.dishes}
          />
        )} />
        <Route path='/dish/:id/edit' render={(props) => (
          <EditDish
            {...props}
            editDish={this.editDish}
          />
        )} />

        <Route path='/dishes/:id' render={(props) => {
          const dishId = props.match.params.id;
          return <DishItem
            dishId={dishId}
            recipes={this.state.recipes}
            currentUser={this.props.currentUser}
          />
        }} />
      </main>
    )
  }
}

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllRecipes } from '../services/recipe';
import { getAllDishes, createDish, deleteDish, updateDish } from '../services/dish';
import ShowRecipes from './ShowRecipes';
import ShowDishes from './ShowDishes';
import CreateDish from './CreateDish';
import EditDish from './EditDish'
import DishItem from './DishItem'

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

        <Route path='/recipes' render={() => (
          <ShowRecipes
            recipes={this.state.recipes}
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

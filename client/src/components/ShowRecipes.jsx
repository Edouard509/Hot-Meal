import React from 'react'
import './ShowRecipes.css'
import { Link } from 'react-router-dom';
export default function ShowRecipes(props) {
  const { recipes } = props;
  console.log(props)
  return (
    <>
      {/* <hr /> */}
      <div className="recipes">
        <h3>Recipes</h3>
      </div>
      {
        recipes.map(recipe => (
          <React.Fragment key={recipe.id}>
            <ul className='recipe'>
              <li className="recipe-name">{recipe.name}</li>
            </ul>
          </React.Fragment>
        ))
      }
      <br />
      <Link className="create-link" to='/new/recipe'><button className="create-button">Create</button></Link>
    </>
  )
}
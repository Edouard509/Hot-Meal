import React from 'react'
import './ShowRecipes.css'
import { Link } from 'react-router-dom';
export default function ShowRecipes(props) {
  const { recipes, currentUser, destroyRecipe } = props;
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

            {
              currentUser && currentUser.id === recipe.user_id && (
                <div className="button-container">

                  <Link to={`/recipe/${recipe.id}/edit`}>
                    <button className="edit-button">
                      Edit
                    </button>
                  </Link>

                  <button className="delete-button" onClick={() => destroyRecipe(recipe.id)}>
                    Delete
                  </button>

                </div>
              )
            }
          </React.Fragment>
        ))
      }
      <br />
      <div className='button'>
        <Link className="create-link" to='/new/recipe'>
          <button className="create-button">
            Create
          </button>
        </Link>
      </div>
    </>
  )
}
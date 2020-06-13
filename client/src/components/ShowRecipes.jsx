import React from 'react'

export default function ShowRecipes(props) {
  const { recipes } = props;
  console.log(props)
  return (
    <>
      <hr />
      <h3>Recipes</h3>
      {
        recipes.map(recipe => (
          <React.Fragment key={recipe.id}>
            <p>{recipes.name}</p>
          </React.Fragment>
        ))
      }
    </>
  )
}
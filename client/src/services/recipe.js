import api from './api-helper';

export const getAllRecipes = async () => {
  const resp = await api.get('/recipes')
  return resp.data;
}

export const createRecipe = async (recipeData, dishId) => {
  console.log(recipeData)
  const resp = await api.post(`/dishes/${dishId}/recipes`, { recipe: recipeData });
  return resp.data;
}
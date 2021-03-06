import api from './api-helper';

export const getAllRecipes = async () => {
  const resp = await api.get('/recipes')
  return resp.data;
}

export const getOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
}

export const createRecipe = async (recipeData, dishId) => {
  console.log(recipeData)
  const resp = await api.post(`/dishes/${dishId}/recipes`, { recipe: recipeData });
  return resp.data;
}

export const updateRecipe = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, { recipe: recipeData });
  return resp.data;
}

export const deleteRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`)
  return resp
}
import api from './api-helper';

export const getAllRecipes = () => {
  const resp = await api.get('/recipes')
  return resp.data;
}
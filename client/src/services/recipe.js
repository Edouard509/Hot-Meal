import api from './api-helper';

export const getAllRecipes = async () => {
  const resp = await api.get('/recipes')
  return resp.data;
}
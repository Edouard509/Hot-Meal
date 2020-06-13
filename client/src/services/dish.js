import api from './api-helper';

export const getAllDishes = async () => {
  const resp = await api.get('/dishes');
  return resp.data;
}

export const getOneDish = async (id) => {
  const resp = await api.get(`/dishes/${id}`);
  return resp.data;
}

export const createDish = async (dishData) => {
  console.log(dishData)
  const resp = await api.post('/dishes', { dish: dishData });
  return resp.data;
}

export const updateDish = async (id, dishData) => {
  const resp = await api.put(`/dishes/${id}`, { dish: dishData });
  return resp.data;
}

export const deleteDish = async (id) => {
  const resp = await api.delete(`/dishes/${id}`)
  return resp
}

export const dishToRecipe = async (dishId, recipeId) => {
  const resp = await api.get(`/dishes/${dishId}/recipes/${recipeId}`);
  return resp.data;
}

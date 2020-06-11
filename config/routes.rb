Rails.application.routes.draw do
  resources :recipes, only: :index
  resources :dishes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/dishes/:dish_id/recipes/:id', to: 'dishes#dish_to_recipe'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :pokemons, only: [:index, :show, :create]
  post 'likes', to: 'users#like_image'
end

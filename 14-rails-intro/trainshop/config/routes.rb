Rails.application.routes.draw do

  get "/trains", to: 'trains#index'
  get "/trains/:id", to: 'trains#show', as: 'train'

  # resources :trains, only: [:index, :show]

end

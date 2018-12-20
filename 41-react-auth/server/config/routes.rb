Rails.application.routes.draw do
  post 'signin', to: 'user#signin'
  post 'validate', to: 'user#validate'
end

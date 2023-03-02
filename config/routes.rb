Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :houses

  get 'users', to:'sessions#index'
  get 'search', to:'houses#search_result'

  get 'images', to: 'houses#all_images'
  
  get 'houses', to: 'houses#index'
  post :destroy, to: 'houses#destroy'
end

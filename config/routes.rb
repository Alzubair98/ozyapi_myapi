Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :houses

  get 'users', to:'sessions#index'

  get 'images', to: 'houses#all_images'
  
  get 'houses', to: 'houses#index'
  
  
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :houses

  get 'images', to: 'houses#all_images'
  
  get 'houses', to: 'houses#index'
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  # Defines the root path route ("/")
  # root "articles#index"
end

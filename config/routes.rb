Rails.application.routes.draw do
  devise_for :users
  get "/"                  => 'welcome#index', as: 'root'
  resources :users, except: [:index]
end

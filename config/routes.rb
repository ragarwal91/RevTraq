Rails.application.routes.draw do
  devise_for :users
  get "/"                  => 'welcome#index', as: 'root'
  resources :users, except: [:index]
  resources :businesses, except: [:index]
  resources :sales, except: [:index]
  # /my_sales
end

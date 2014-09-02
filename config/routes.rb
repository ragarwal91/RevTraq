Rails.application.routes.draw do
  devise_for :users
  get "/"                  => 'welcome#index', as: 'root'
  resources :users
  resources :businesses, except: [:index] do
    resources :sales
  end
  # /my_sales
end

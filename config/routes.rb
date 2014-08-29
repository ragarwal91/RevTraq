Rails.application.routes.draw do
  devise_for :users
  get "/"                  => 'welcome#index', as: 'root'
  resources :users, except: [:index]
  resources :businesses, except: [:index] do
    resources :sales, except: [:index]
  end
  # /my_sales
end

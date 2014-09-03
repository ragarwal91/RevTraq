Rails.application.routes.draw do
  devise_for :users
  get "/"                  => 'welcome#index', as: 'root'
  resources :users
  resources :businesses, except: [:index] do
    get '/sales/last_day'  => 'sales#last_day_sale'
    get '/sales/last_week'  => 'sales#last_week_sales'
    get '/sales/last_month' => 'sales#last_month_sales'
    get '/sales/last_year'  => 'sales#last_year_sales'
    resources :sales
  end
end

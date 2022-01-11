Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update]
    
    resources :users do
      resources :profiles, only: [:index, :create]
    end
    
    resources :profiles, only: [:show, :update, :destroy]

    resources :profiles do
      resources :mylists, only: [:index]
      resources :likes, only: [:index]
    end

    resources :mylists, only: [:create, :destroy]

    resources :likes, only: [:create, :destroy]

    resources :videos, only: [:index, :show]

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end

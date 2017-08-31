Rails.application.routes.draw do
  
  devise_for :users, :controllers => {:sessions => "sessions"}

  devise_scope :user do 
    delete "/users/sign_out" => "devise/sessions#destroy" 
  end

  resources :users, only: [:show] do
    resources :clients, only: [:show, :new, :edit] do
    end
  end
  
  resources :clients, only: [:show, :index, :create, :update, :delete] do
      resources :history, :labs, :fullassessments, :progressnotes, :monitoringnotes, :nextevaluationnotes, :goals
  end

	
  root 'pages#home'

	get '#processingViewModal', to: 'pages#home'

  get '/dashboard', to: 'pages#dashboard'

  get '/clients/:id/medical_history', to: 'clients#medical_history'


 
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  
  resources :current_users
  resources :goals
  resources :nextevaluationnotes
  resources :documents
  resources :fullassessments
  resources :monitoringnotes
  resources :progressnotes
  resources :clients
  resources :client_info
  devise_for :users, :controllers => {:registrations => "registrations", :sessions => "sessions"}
  # devise_for :users, :controllers => {:sessions => "sessions"}

	devise_scope :user do get "/users/sign_out" => "devise/sessions#destroy" end
	
  root 'pages#home'

	get 'client_info/key_info', to: "client_info#key_info"

  get 'user/key_info', to: "current_users#show"


	get '#processingViewModal', to: 'pages#home'

  get 'calendar', to: 'pages#calendar'

	get 'clients/:id/nutritionaldata' => 'clients#nutritionaldata'

 
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

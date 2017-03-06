Rails.application.routes.draw do

  resources :clients
  resources :client_info
  devise_for :users, :controllers => {registrations: 'registrations'}
	devise_scope :user do get "/users/sign_out" => "devise/sessions#destroy" end
	root 'pages#home';
	get 'client_info/key_info', to: "client_info#key_info"

	get 'clients/:id/nutritionaldata' => 'clients#nutritionaldata'

 
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

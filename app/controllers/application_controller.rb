class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
before_action :authenticate_user! #-> routes to the login / signup if not authenticated
protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  private
 


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
  end

end
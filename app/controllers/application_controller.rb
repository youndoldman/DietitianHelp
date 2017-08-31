class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
	before_action :authenticate_user! #-> routes to the login / signup if not authenticated
  before_action :client_loaded_same_as_params?
	protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  helper_method :current_client


  def initialize_client_attributes
    @labs = Lab.new
    @lab = @client.labs.present? ? @client.labs.last : @labs
    @fullassessment = Fullassessment.new
    @progressnote = Progressnote.new
    @monitoringnote = Monitoringnote.new
    @nextevaluationnote = Nextevaluationnote.new
    @goal = Goal.new
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :password, :password_confirmation, :remember_me, :provider) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me, :provider) }
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def current_client
    session[:current_client_id] ||= "Not loaded"
  end

  def client_loaded_same_as_params?
    current_client.to_i == params[:client_id].to_i
  end


end
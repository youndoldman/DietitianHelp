class Users::SessionsController < Devise::SessionsController
  respond_to :json

prepend_before_action :require_no_authentication, only: [:new, :create]
  prepend_before_action :allow_params_authentication!, only: :create
  prepend_before_action :verify_signed_out_user, only: :destroy
  prepend_before_action only: [:create, :destroy] { request.env["devise.skip_timeout"] = true }
  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
     self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)
    if !session[:return_to].blank?
      redirect_to session[:return_to]
      session[:return_to] = nil
    else
      respond_with resource, :location => after_sign_in_path_for(resource)
    end
  end

  # DELETE /resource/sign_out
  def destroy
    super
   end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
   devise_parameter_sanitizer.permit(:sign_in, keys: [:username])
  end
end

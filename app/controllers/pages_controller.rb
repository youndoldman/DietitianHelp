class PagesController < ApplicationController 
	before_action :require_login, only: [:require_login]
private

  
  end
  def require_login
    unless current_user
      redirect_to 'users/sign_in'
    end
  def home
  end
  def nutritionaldata
    @client = Client.find(params[:id])
  end
  def login	
  end
  def calendar
  end
  def account_profile
    @user = User.find(params[:id])
  end

end

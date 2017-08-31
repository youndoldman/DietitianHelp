class PagesController < ApplicationController 
	before_action :require_login

  def home
    @client = Client.new
  end

  def dashboard
    @clients = current_user.clients
    @nextevaluationnotes = current_user.nextevaluationnotes
  end

  def account_profile
    @user = User.find(params[:id])
  end
  
  def nutritionaldata
    @client = Client.find(params[:id])
  end

  private  

    def require_login
      unless current_user
        redirect_to 'users/sign_in'
      end
    end

    def login 
    end


end
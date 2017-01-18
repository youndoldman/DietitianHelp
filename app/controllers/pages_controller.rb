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
  def login	
  end
end

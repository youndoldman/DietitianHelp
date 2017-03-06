class ClientInfoController < ApplicationController
  def key_info
  end
  def history
  	@client = Client.find(params[:id])
  
  end
  def show
  	@client = Client.find(params[:id])
  end
  def other_info
  end
end

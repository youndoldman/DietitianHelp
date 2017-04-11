class ClientsController < ApplicationController
  before_action :set_client, only: [:assign_current_client, :show, :edit, :update, :destroy, :params, :client_params]
  skip_before_action :verify_authenticity_token, only: [:update]  

  # GET /clients
  # GET /clients.json
  def index
    @clients = []
    @getter = Client.all.each do |client|
      if client.user_id === current_user.id
        @clients << client
      else 
      end
    end
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    @client = Client.find(params[:id])
    def will_show
      Client.find(params[:id])
    end
    def will_not_show
      redirect_to clients_path
      respond_to do |format|
        format.html { flash[:notice] = "NOPE" }
      end
    end
    if @client.user_id === current_user.id
      will_show
    else
      will_not_show
    end
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  # GET /clients/1/edit
  def edit
    @Clients = Client.find(params[:id])
  end

  def nutritionaldata
    @Client = Client.find(params[:id])
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)
    @client_attr = @client.attributes
    respond_to do |format|
      if @client.save
        format.js { render :js => "loadClient(" + @client.id.to_s + ");"}
        format.json { render :show, status: :created, location: @client }
      else
        format.html { render :new }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  def error(kind)
    @client = Client.find(params[:id])
    respond_to do |format|
      if kind === 'same_as_last'
        format.js { render :js => "$('#modal-alert3').iziModal('setTitle', 'Identic to last');"}
      end
    end
  end

  def client_params1
      
  end
  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
      @client.update(client_params)
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client.destroy
    respond_to do |format|
      format.html { flash[:notice] = 'Client was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def client_params
      params.require(:client).permit(:id, :firstname, :lastname, :dob, :gender, :allergies, :user_id, :cdiet, :dx, :ht, :cbw, :date0, :thirtywt, :ninetywt, :oneeightywt, :date1, :date2, :date3, :intakefrom, :intaketo, :bmi, :ibw, :calreq, :proreq, :flreq, :fassess, :fpes, :pes0, :pes1, :pes2)
    end
end

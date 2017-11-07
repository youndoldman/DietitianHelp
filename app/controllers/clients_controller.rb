class ClientsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]
  before_action :client_belongs_to_user?
  skip_before_action :client_belongs_to_user?, only: [:index, :new, :create]
  # after_action :show, :client_belongs_to_user?
  # GET /clients
  # GET /clients.json
  def index
    @clients = current_user.clients
    render json: @clients
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    if client_belongs_to_user?
      @client = set_client
      initialize_client_attributes # FIND METHOD IN application_controller
      session[:current_client_id] = @client.id
    else
      flash[:message] = "Client not found"
      redirect_to '/dashboard'
    end
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  def nutritionaldata
    @client = set_client
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)
      if @client.save
        render :js => "loadClient(" + @client.id.to_s + ")"
      else
        render :new
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

  def history
    @client = set_client
    @medical_records = @client.medical_records
    @fullassessments = @medical_records[:fullassessments]
    @progressnotes = @medical_records[:progressnotes]
    @labs = @medical_records[:labs]
    @monitoringnotes = @medical_records[:monitoringnotes]
    @nextevaluationnotes = @medical_records[:nextevaluationnotes]
    @goals = @medical_records[:goals]
    render :medical_history
  end

  def client_params1
      
  end
  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
    @client = set_client
    @client.update(client_params)
    render json: @client
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

    def client_belongs_to_user?
      if set_client.user_id != current_user.id
        @client = Client.new
        @client.errors.add(:user_id, "Client not found on your records")
        flash[:message] = {status: 'error', content: "Client not found on your records"}
        redirect_to root_path
      else true
      end
    end
end

class NextevaluationnotesController < ApplicationController
  before_action :set_nextevaluationnote, only: [:show, :edit, :update, :destroy]

  # GET /nextevaluationnotes
  # GET /nextevaluationnotes.json
  def index
    @nextevaluationnotes = Nextevaluationnote.where(user_id: current_user.id).all
  end

  # GET /nextevaluationnotes/1
  # GET /nextevaluationnotes/1.json
  def show
    if Nextevaluationnote.find(params[:id]).user_id != current_user.id
    redirect_to clients_path
      respond_to do |format|
        format.html { flash[:notice] = "NOPE" }
      end
    end
  end

  # GET /nextevaluationnotes/new
  def new
    if Nextevaluationnote.find(params[:id]).user_id != current_user.id
    redirect_to clients_path
      respond_to do |format|
        format.html { flash[:notice] = "NOPE" }
      end
    else @nextevaluationnote = Nextevaluationnote.new
    end
  end

  # GET /nextevaluationnotes/1/edit
  def edit
    if Nextevaluationnote.find(params[:id]).user_id != current_user.id
    redirect_to clients_path
      respond_to do |format|
        format.html { flash[:notice] = "NOPE" }
      end
    end
  end

  # POST /nextevaluationnotes
  # POST /nextevaluationnotes.json
  def create
    if Nextevaluationnote.find(params[:id]).user_id != current_user.id
    redirect_to clients_path
      respond_to do |x|
        x.html { flash[:notice] = "NOPE" }
      end
    else     @nextevaluationnote = Nextevaluationnote.new(nextevaluationnote_params)
    end

    respond_to do |format|
      if @nextevaluationnote.save
        format.html { }
        format.json { render :show, status: :created, location: @nextevaluationnote }
      else
        format.html { render :new }
        format.json { render json: @nextevaluationnote.errors, status: :unprocessable_entity }
      end
    end

  end

  # PATCH/PUT /nextevaluationnotes/1
  # PATCH/PUT /nextevaluationnotes/1.json
  def update
    respond_to do |format|
      if @nextevaluationnote.update(nextevaluationnote_params)
        format.html { redirect_to @nextevaluationnote, notice: 'Nextevaluationnote was successfully updated.' }
        format.json { render :show, status: :ok, location: @nextevaluationnote }
      else
        format.html { render :edit }
        format.json { render json: @nextevaluationnote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nextevaluationnotes/1
  # DELETE /nextevaluationnotes/1.json
  def destroy
    @nextevaluationnote.destroy
    respond_to do |format|
      format.html { redirect_to nextevaluationnotes_url, notice: 'Nextevaluationnote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nextevaluationnote
      @nextevaluationnote = Nextevaluationnote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def nextevaluationnote_params
      params.require(:nextevaluationnote).permit(:nnote, :nnote_date, :client_id, :user_id)
    end
end

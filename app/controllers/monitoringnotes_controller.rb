class MonitoringnotesController < ApplicationController
  skip_before_action :client_loaded_same_as_params?, only: [:show, :index]
  before_action :set_monitoringnote, only: [:show, :edit, :update, :destroy]

  # GET /monitoringnotes
  # GET /monitoringnotes.json
  def index
    @monitoringnotes = Monitoringnote.all
  end

  # GET /monitoringnotes/1
  # GET /monitoringnotes/1.json
  def show
  end

  # GET /monitoringnotes/new
  def new
    @monitoringnote = Monitoringnote.new
  end

  # GET /monitoringnotes/1/edit
  def edit
  end

  # POST /monitoringnotes
  # POST /monitoringnotes.json
  def create
    @monitoringnote = Monitoringnote.new(monitoringnote_params)
      if @monitoringnote.save
        render json: @monitoringnote.to_json
      else
        render json: @monitoringnote.to_json
      end
  end

  # PATCH/PUT /monitoringnotes/1
  # PATCH/PUT /monitoringnotes/1.json
  def update
    respond_to do |format|
      if @monitoringnote.update(monitoringnote_params)
        format.html { redirect_to @monitoringnote, notice: 'Monitoringnote was successfully updated.' }
        format.json { render :show, status: :ok, location: @monitoringnote }
      else
        format.html { render :edit }
        format.json { render json: @monitoringnote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /monitoringnotes/1
  # DELETE /monitoringnotes/1.json
  def destroy
    @monitoringnote.destroy
    respond_to do |format|
      format.html { redirect_to monitoringnotes_url, notice: 'Monitoringnote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_monitoringnote
      @monitoringnote = Monitoringnote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def monitoringnote_params
      params.require(:monitoringnote).permit(:mnote, :client_id)
    end
end

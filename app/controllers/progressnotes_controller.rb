class ProgressnotesController < ApplicationController
  skip_before_action :client_loaded_same_as_params?, only: [:show, :index]
  before_action :set_progressnote, only: [:show, :edit, :update, :destroy]

  # GET /progressnotes
  # GET /progressnotes.json
  def index
    @progressnotes = Progressnote.all
  end

  # GET /progressnotes/1
  # GET /progressnotes/1.json
  def show
  end

  # GET /progressnotes/new
  def new
    @progressnote = Progressnote.new
  end

  # GET /progressnotes/1/edit
  def edit
  end

  # POST /progressnotes
  # POST /progressnotes.json
  def create
    @progressnote = Progressnote.new(progressnote_params)
      if @progressnote.save
        render json: @progressnote.to_json
      else
        render json: @progressnote.to_json
      end
  end

  # PATCH/PUT /progressnotes/1
  # PATCH/PUT /progressnotes/1.json
  def update
    respond_to do |format|
      if @progressnote.update(progressnote_params)
        format.html { redirect_to @progressnote, notice: 'Progressnote was successfully updated.' }
        format.json { render :show, status: :ok, location: @progressnote }
      else
        format.html { render :edit }
        format.json { render json: @progressnote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /progressnotes/1
  # DELETE /progressnotes/1.json
  def destroy
    @progressnote.destroy
    respond_to do |format|
      format.html { redirect_to progressnotes_url, notice: 'Progressnote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_progressnote
      @progressnote = Progressnote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def progressnote_params
      params.require(:progressnote).permit(:pnote, :client_id)
    end
end

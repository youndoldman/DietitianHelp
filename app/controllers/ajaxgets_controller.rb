class AjaxgetsController < ApplicationController
  before_action :set_ajaxget, only: [:show, :edit, :update, :destroy]

  # GET /ajaxgets
  # GET /ajaxgets.json
  def index
    @ajaxgets = Ajaxget.all
  end

  # GET /ajaxgets/1
  # GET /ajaxgets/1.json
  def show
  end

  # GET /ajaxgets/new
  def new
    @ajaxget = Ajaxget.new
  end

  # GET /ajaxgets/1/edit
  def edit
  end

  # POST /ajaxgets
  # POST /ajaxgets.json
  def create
    @ajaxget = Ajaxget.new(ajaxget_params)

    respond_to do |format|
      if @ajaxget.save
        format.html { redirect_to @ajaxget, notice: 'Ajaxget was successfully created.' }
        format.json { render :show, status: :created, location: @ajaxget }
      else
        format.html { render :new }
        format.json { render json: @ajaxget.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ajaxgets/1
  # PATCH/PUT /ajaxgets/1.json
  def update
    respond_to do |format|
      if @ajaxget.update(ajaxget_params)
        format.html { redirect_to @ajaxget, notice: 'Ajaxget was successfully updated.' }
        format.json { render :show, status: :ok, location: @ajaxget }
      else
        format.html { render :edit }
        format.json { render json: @ajaxget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ajaxgets/1
  # DELETE /ajaxgets/1.json
  def destroy
    @ajaxget.destroy
    respond_to do |format|
      format.html { redirect_to ajaxgets_url, notice: 'Ajaxget was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ajaxget
      @ajaxget = Ajaxget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ajaxget_params
      params.fetch(:ajaxget, {})
    end
end

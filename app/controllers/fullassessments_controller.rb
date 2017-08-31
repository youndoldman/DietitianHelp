class FullassessmentsController < ApplicationController
  skip_before_action :client_loaded_same_as_params?, only: [:show, :index]
  before_action :set_fullassessment, only: [:show, :edit, :update, :destroy]

  # GET /fullassessments
  # GET /fullassessments.json
  def index
    @fullassessments = Fullassessment.all
  end

  # GET /fullassessments/1
  # GET /fullassessments/1.json
  def show
  end

  # GET /fullassessments/new
  def new
    @fullassessment = Fullassessment.new
  end

  # GET /fullassessments/1/edit
  def edit
  end

  # POST /fullassessments
  # POST /fullassessments.json
  def create
    @fullassessment = Fullassessment.new(fullassessment_params)
    respond_to do |format|
      if @fullassessment.save
       format.js { render :js => "$('#modal-alert2').iziModal('open');"}
        format.json { render :show, status: :created, location: @fullassessment }
      else
        format.html { render :new }
        format.json { render json: @fullassessment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fullassessments/1
  # PATCH/PUT /fullassessments/1.json
  def update
    respond_to do |format|
      if @fullassessment.update(fullassessment_params)
        format.html { redirect_to @fullassessment, notice: 'Fullassessment was successfully updated.' }
        format.json { render :show, status: :ok, location: @fullassessment }
      else
        format.html { render :edit }
        format.json { render json: @fullassessment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fullassessments/1
  # DELETE /fullassessments/1.json
  def destroy
    @fullassessment.destroy
    respond_to do |format|
      format.html { redirect_to fullassessments_url, notice: 'Fullassessment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fullassessment
      @fullassessment = Fullassessment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def fullassessment_params
      params.require(:fullassessment).permit(:assessment, :date, :type, :diagnosis, :intervention, :monitoring_evaluation, :client_id)
    end
end

class GoalsController < ApplicationController
  before_action :set_goal, only: [:show, :edit, :update, :destroy]
  skip_before_action :client_loaded_same_as_params?, only: [:show, :index]

  # GET /goals
  # GET /goals.json
  def index
    @goals = Goal.where(client_id: $current_client.id)
  end

  # GET /goals/1
  # GET /goals/1.json
  def show
    @goal = Goal.find(params[:id])
  end

  # GET /goals/new
  def new
    @goal = Goal.new
  end

  # GET /goals/1/edit
  def edit
    @goal = set_goal
  end

  # POST /goals
  # POST /goals.json
  def create
    @goal = Goal.new(goal_params)
    @goal.client_id = params[:client_id]
    @goal.status = 'active'

      if @goal.save
        flash[:message] = "Goal saved"
        render json: @goal.to_json
      else
      end
  end

  # PATCH/PUT /goals/1
  # PATCH/PUT /goals/1.json
  def update
      if @goal.update(goal_params)
        flash[:message] = "Goal saved"
        render json: @goal.to_json
      else
        render json: @goal.to_json
      end
  end

  # DELETE /goals/1
  # DELETE /goals/1.json
  def destroy
    if @goal.destroy
      flash[:message] = "Goal saved"
      render json: @goal.to_json
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goal
      @goal = Goal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def goal_params
      params.require(:goal).permit(:client_id, :name, :revision_date, :status)
    end
end

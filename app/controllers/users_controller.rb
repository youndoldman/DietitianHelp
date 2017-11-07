class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /current_users
  # GET /current_users.json
  def index
    @users = User.all
  end

  # GET /current_users/1
  def show
    @user = User.find(params[:id])
  end
  

  # GET /current_users/new
  def new
    @user = CurrentUser.new
    redirect_to '/sessions/new'
  end

  # GET /current_users/1/edit
  def edit
  end

  # POST /current_users
  # POST /current_users.json
  def create
    @user = CurrentUser.new(current_user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'Current user was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /current_users/1
  # PATCH/PUT /current_users/1.json
  def update
    respond_to do |format|
      if @user.update(current_user_params)
        format.html { redirect_to @user, notice: 'Current user was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /current_users/1
  # DELETE /current_users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to current_users_url, notice: 'Current user was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      return if params[:id] == "sign_out"
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def current_user_params
      params.fetch(:user, {})
    end
end

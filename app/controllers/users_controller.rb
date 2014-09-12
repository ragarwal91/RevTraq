class UsersController < ApplicationController
  before_action :authorize, only: [:destroy]

  def show
    @user = User.find(params[:id])
    render json: @user.as_json(:include => [:businesses])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:current_user] = @user.id
      redirect_to(root_path)
    else
      render(:new)
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to(user_path(@user))
    else
      render(:edit)
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil
    redirect_to(root_path)
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :encrypted_password)
  end

end

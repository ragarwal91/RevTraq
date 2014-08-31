class BusinessesController < ApplicationController

  def show
    @business = Business.find(params[:id])
    @sale = Sale.new
    @sales = Sale.all
    # render json: @business
  end  

  def new
    @business = Business.new
  end

  def create
    @business = Business.new(business_params)
    @business.user_id = current_user.id
    if @business.save
      # session[:current_user] = @business.id
      binding.pry
      redirect_to(root_path)
    else
      render(:new)
    end
  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :city, :zip_code, :logo)
  end

end
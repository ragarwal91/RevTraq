class BusinessesController < ApplicationController

  def index
    @businesses = Business.find(params[:sale_id]).businesses
    render json: @businesses
  end

  def show
    @business = Business.find(params[:id])
    @sale = Sale.new
    @sales = Sale.all
    employees = @business.employees
    render :json => @business.as_json(:include => [:employees])
  end  

  def new
    @business = Business.new
  end

  def create
    @business = Business.new(business_params)
    @business.user_id = current_user.id
    if @business.save
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
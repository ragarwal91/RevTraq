class SalesController < ApplicationController

  before_action :determine_scope

  def index
    @sales = @scope.all
    render json: @sales
  
  end

  def show
    @sale = Sale.find(params[:id])
    # render json: @sale
  end

  def new
    @sale = Sale.new
  end

  def create
    @sale = Sale.new(sale_params)
    if @sale.save
      session[:current_user] = @sale.id
      business = Business.find(params[:business_id])
      business.sales.push(@sale)
      redirect_to business_path(business)
    else
      render(:new)
    end
  end

  def edit
    @sale = Sale.find(params[:id])
  end

  def update
    @sale = Sale.find(params[:id])
    if @sale.update(sale_params)
      redirect_to(sale_path(@sale))
    else
      render(:edit)
    end
  end

  def destroy
    @sale = Sale.find(params[:id])
    @sale.destroy
    session[:current_user] = nil
    redirect_to(root_path)
  end

  private

  def determine_scope
    # @scope = params[:user_id] ? User.find(params[:user_id]).games : Game
    @scope = params[:business_id] ? Business.find(params[:business_id]).sales : Sale
  end

  def sale_params
    params.require(:sale).permit(:sale_date, :temperature, :weather_type, :notes, :business_id, :daily_sale)
  end

end
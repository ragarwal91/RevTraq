class SalesController < ApplicationController

  before_action :determine_scope

  def index

    # Returns JSON all sales that are part of a specific business
    @sales = @scope.all
    @employees = Employee.all
    render json: @sales.as_json(:include => [:employees])
  end

  def show
    @sale = Sale.find(params[:id])
    @employees = Employee.all
    render json: @sale.as_json(:include => [:employees])
    # render json: @sale
  end

  def new
    @sale = Sale.new
  end

  def create
    business = Business.find(params[:business_id])
    # Getting weather data from openweathermap
    @weather_api = Weather.search(business.city)
    api_temp = @weather_api["main"]["temp"].to_s
    api_weather_type = @weather_api["weather"][0]["main"]
    @sale = Sale.new(sale_params)
    # Saving temperature and weather type automatically
    @sale.temperature  = api_temp
    @sale.weather_type = api_weather_type
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

  # Getting the last days sale and rendering as json
  def last_day_sale
    business = Business.find(params[:business_id])
    @day_sale = business.sales.where("sale_date > ?", 1.days.ago)
    @employees = Employee.all
    render json: @day_sale.as_json(:include => [:employees])
    # render json: @day_sale
  end

  # Getting the last weeks sales and rendering as json
  def last_week_sales
    business = Business.find(params[:business_id])
    @week_sales = business.sales.where("sale_date > ?", 7.days.ago)
    render json: @week_sales
  end

  # Getting the last months sales and rendering as json
  def last_month_sales
    business = Business.find(params[:business_id])
    @month_sales = business.sales.where("sale_date > ?", 30.days.ago)
    render json: @month_sales
  end

  # Getting the last years sales and rendering as json
  def last_year_sale
    business = Business.find(params[:business_id])
    @last_year = business.sales.where(sale_date: 365.days.ago)
    @employees = Employee.all
    render json: @last_year.as_json(:include => [:employees])
  end

  def destroy
    @sale = Sale.find(params[:id])
    @sale.destroy
    session[:current_user] = nil
    redirect_to(root_path)
  end

  private

  def determine_scope

    # Return sales that only belong to the business
    @scope = params[:business_id] ? Business.find(params[:business_id]).sales : Sale

  end

  def sale_params
    params.require(:sale).permit(:sale_date, :temperature, :weather_type, :notes, :business_id, :daily_sale)
  end

end
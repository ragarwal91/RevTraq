class EmployeesController < ApplicationController

  def index
    @employees = Employee.all
    render json: @employees.as_json(:include => [:sales])
  end

  def show
    @employee = Employee.find(params[:id])
    render :json => @employee.as_json(:include => [:sales])
  end

  def new
    @employee = Employee.new
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      redirect_to(root_path)
    else
      render(:new)
    end
  end

  def edit
    @employee = Employee.find(params[:id])
  end

  def update
    @employee = Employee.find(params[:id])
    if @employee.update(employee_params)
      redirect_to(employee_path(@employee))
    else
      render(:edit)
    end
  end

  def destroy
    @employee = Employee.find(params[:id])
    @employee.destroy
    redirect_to(root_path)
  end

  private
  def employee_params
    params.require(:employee).permit(:name)
  end

end

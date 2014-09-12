class CreateEmployeesSales < ActiveRecord::Migration
  def change
    create_table :employees_sales do |t|
      t.references :employee
      t.references :sale
    end
  end
end

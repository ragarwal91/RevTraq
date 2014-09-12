class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string  :name
      t.integer :business_id
    end
  end
end

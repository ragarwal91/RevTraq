class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.date    :sale_date
      t.float   :daily_sale
      t.string  :temperature
      t.string  :weather_type
      t.text    :notes
      t.integer :business_id 
    end
  end
end

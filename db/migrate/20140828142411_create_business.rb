class CreateBusiness < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string  :name
      t.text    :address
      t.string  :city
      t.integer :zip_code
      t.text    :logo
      t.integer :user_id

      t.timestamps
    end
  end
end

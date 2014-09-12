class Sale < ActiveRecord::Base

  belongs_to :business
  has_and_belongs_to_many :employees

end
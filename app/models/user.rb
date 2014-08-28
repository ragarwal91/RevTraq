class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :confirmable

  validates_presence_of :first_name, :last_name, :username, :email, :encrypted_password
  validates_uniqueness_of :username, :email

  has_many :businesses

end

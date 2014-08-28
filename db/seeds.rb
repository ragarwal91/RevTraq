# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Business.destroy_all


tb = Business.create(
  name:     "HAMPot",
  address:  "915 Broadway",
  city:     "New York, NY",
  zip_code: 10010,
  logo:     "http://i.imgur.com/lNuPPm5.png",
  user_id:  2
)

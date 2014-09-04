class Weather
  def self.search(search_param)
    # Search params are business.city
    return HTTParty.get(URI.escape("http://api.openweathermap.org/data/2.5/weather?q=#{search_param}&units=imperial"))
  end
end

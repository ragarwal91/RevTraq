class Weather
  def self.search(search_param)
    return HTTParty.get(URI.escape("http://api.openweathermap.org/data/2.5/weather?q=#{search_param}&units=imperial"))
  end
end

class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    if params[:type] == "json"
      data = @venues.map do |venue|
        [venue.latitude, venue.longitude]
      end 
      render json: {data: data, center: [data[0][0], data[0][1]]}
    end
  end

  def show
    @venue = Venue.find(params[:id])
    @proximity_message = proximity_message
    if params[:type] == "json"
      render json: {data: [@venue.latitude, @venue.longitude], center: [@venue.latitude, @venue.longitude]}
    end
  end
  
  private 
  
  def proximity_message
    proximity = Venue.near([@venue.latitude, @venue.longitude], 50)
    if proximity.length == 2
      "There is 1 venue within 50km"
    elsif proximity.length > 2
      "There are #{proximity.length - 1} venues within 50km"
    else 
      "There's no venues nearby"
    end
  end
end

class Spot < ActiveRecord::Base
  geocoded_by :location
  before_create :geocode
end

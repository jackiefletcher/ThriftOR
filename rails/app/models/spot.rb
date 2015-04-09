class Spot < ActiveRecord::Base
  geocoded_by :location
  before_create :geocode
  validates_presence_of :cloudinary_public_id

end

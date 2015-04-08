class Spot < ActiveRecord::Base
  geocoded_by :location
  before_create :geocode
  has_filepicker_image :image_url, styles: { large: [500,500], medium: [300,300], thumb: [100,100] }
end

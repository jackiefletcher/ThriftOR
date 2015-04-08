class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :kind, :price_range, :style, :hours, :card,
  :dates, :phone, :created_at, :latitude, :longitude, :image_url
end

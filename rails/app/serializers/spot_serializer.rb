class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :kind, :price_range, :style, :hours, :card?,
  :dates, :phone, :created_at, :image_url
end

class HouseSerializer
  include JSONAPI::Serializer
  has_many :houses
  attributes :id, :house_type, :images, :image_url
end

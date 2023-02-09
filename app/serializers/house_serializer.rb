class HouseSerializer
  include JSONAPI::Serializer
  attributes :id, :house_type, :image, :image_url
end

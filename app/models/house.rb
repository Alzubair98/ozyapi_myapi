class House < ApplicationRecord
    # has_one_attached :image
    has_many_attached :images

    validates :house_type, presence: true
    validates :real_price, presence: true
    validates :price, presence: true
    validates :location, presence: true
    validates :owner_number, presence: true
    validates :age, presence: true
    validates :size, presence: true
    validates :rooms, presence: true
    validates :bath_rooms, presence: true
    validates :ref_number, presence: true

    # def image_url 
    #     Rails.application.routes.url_helpers.url_for(image) if image.attached?
    # end
end
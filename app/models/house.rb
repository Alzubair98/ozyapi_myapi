class House < ApplicationRecord
    # has_one_attached :image
    has_many_attached :images

    # def image_url 
    #     Rails.application.routes.url_helpers.url_for(image) if image.attached?
    # end
end